import fetch from 'isomorphic-fetch'
import jsonBigint from 'json-bigint'
import WebSocket from 'isomorphic-ws'
import {createPatch} from 'rfc6902'
import {AddOperation, RemoveOperation, ReplaceOperation} from 'rfc6902/diff'
import {createClient, Client as SubscriptionClient} from '../../graphql-ws/src'
import {
  Network,
  Environment,
  ClientOptions,
  Client,
  FlexibleRequestBody,
  SubscriptionHandlers,
  PatchedSubscriptionHandlers,
  PatchOperation,
  ObservableSubscription,
} from '../types'
import {formatRequestBody, resolveJsonPointer} from './utils'

const {parse} = jsonBigint({
  useNativeBigInt: true,
})

// generate types
//https://github.com/evanw/esbuild/issues/95#issuecomment-1007485134
export default class HgraphClient implements Client {
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient
  private subscriptions: ObservableSubscription[]

  constructor(options?: ClientOptions) {
    // add to BigInt prototype for JSON.stringify
    if (options?.patchBigIntToJSON !== false) {
      BigInt.prototype['toJSON'] = function () {
        if (Number.MIN_SAFE_INTEGER < this && this < Number.MAX_SAFE_INTEGER)
          return Number(this)
        else return this.toString()
      }
    }

    this.endpoint = `https://${
      options?.network || Network.HederaTestnet
    }.api.hgraph.${options?.environment || Environment.Development}/v1/graphql`

    this.headers = {
      'content-type': 'application/json',
      ...(options?.headers ?? {}),
      ...(options?.token && {authorization: `Bearer ${options.token}`}),
    }

    const identifier = options?.token || options?.headers['x-api-key']
    const url = identifier
      ? this.endpoint
          .replace('https', 'wss')
          .replace('graphql', `${encodeURIComponent(identifier)}/graphql`)
      : this.endpoint.replace('https', 'wss')
    this.subscriptionClient = createClient({
      url,
      webSocketImpl: WebSocket,
      connectionParams: this.headers,
      jsonParse: parse,
    })

    this.subscriptions = []
  }

  async query(
    flexibleRequestBody: FlexibleRequestBody,
    abortSignal?: AbortSignal
  ) {
    const body = formatRequestBody(flexibleRequestBody)
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
      signal: abortSignal,
    })

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`)

    return parse(await response.text())
  }

  removeSubscription(observable: ObservableSubscription) {
    observable.unsubscribe()
  }

  removeAllSubscriptions() {
    this.getSubscribtions().forEach((observable) => observable.unsubscribe())
  }

  getSubscribtions() {
    //copy of original array
    return [...this.subscriptions]
  }

  subscribe(
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) {
    const body = formatRequestBody(flexibleRequestBody)
    const observableSubscription: ObservableSubscription = {
      handlers,
      unsubscribe: null,
    }

    const cleanUpSubscription = (observable: ObservableSubscription) => {
      this.subscriptions = this.subscriptions.filter(
        (subscription) => subscription != observable
      )
      observableSubscription.unsubscribe = () => {
        throw new Error('This subscription has already been unsubscribed')
      }
    }

    const observableHandlers: SubscriptionHandlers = {
      ...handlers,
      error: (errors) => {
        cleanUpSubscription(observableSubscription)
        observableSubscription.handlers.error(errors)
      },
      complete: () => {
        cleanUpSubscription(observableSubscription)
        observableSubscription.handlers.complete()
      },
    }

    const unsubscribe = this.subscriptionClient.subscribe(
      body,
      observableHandlers
    )
    observableSubscription.unsubscribe = () => {
      cleanUpSubscription(observableSubscription)
      unsubscribe()
    }

    this.subscriptions.push(observableSubscription)
    return observableSubscription
  }

  patchedSubscribe(
    flexibleRequestBody: FlexibleRequestBody,
    handlers: PatchedSubscriptionHandlers
  ) {
    let prevData = null
    const patchedHandlers: SubscriptionHandlers = {
      ...handlers,
      next: (data) => {
        let patches: PatchOperation[] = []
        if (prevData) {
          patches = createPatch(prevData, data).map(
            (operation: AddOperation | ReplaceOperation | RemoveOperation) => {
              return {
                ...operation,
                //add value to remove operation
                value:
                  operation.op == 'remove'
                    ? resolveJsonPointer(prevData, operation.path)
                    : operation.value,
              }
            }
          )
        }
        prevData = data
        handlers.next(data, patches)
      },
    }
    return this.subscribe(flexibleRequestBody, patchedHandlers)
  }
}
