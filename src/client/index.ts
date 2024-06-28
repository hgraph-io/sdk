import fetch from 'isomorphic-fetch'
import jsonBigint from 'json-bigint'
import WebSocket from 'isomorphic-ws'
import { createPatch } from 'rfc6902';
import { AddOperation, RemoveOperation, ReplaceOperation } from 'rfc6902/diff';
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
  SubscriptionObservable
} from '../types'
import { formatRequestBody, resolveJsonPointer } from './utils'

const {parse} = jsonBigint({
  useNativeBigInt: true,
})

// generate types
//https://github.com/evanw/esbuild/issues/95#issuecomment-1007485134
export default class HgraphClient implements Client {
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient
  private subscriptions: SubscriptionObservable[];

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

    this.subscriptionClient = createClient({
      url: this.endpoint.replace('https', 'wss'),
      webSocketImpl: WebSocket,
      connectionParams: this.headers,
      jsonParse: parse,
    })
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

  removeSubscription(observable: SubscriptionObservable) {
    this.subscriptions = this.subscriptions.filter(subscription => subscription != observable);
    observable.unsubscribe();
    observable.handlers.complete();
  }
  removeAllSubscription() {
    this.subscriptions.forEach(observable=> {
      observable.unsubscribe();
      observable.handlers.complete();
    });
    this.subscriptions = [];
  }
  getSubscribtions(){
    //copy of original array
    return [...this.subscriptions];
  }

  subscribe(
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) {
    const body = formatRequestBody(flexibleRequestBody)
    const observableSubscription: SubscriptionObservable = {
      handlers,
      unsubscribe: null
    }
    const deleteSubFromArray = (observable: SubscriptionObservable) => 
          this.subscriptions = this.subscriptions.filter(subscription => subscription != observable);
    
    const observableHandlers: SubscriptionHandlers = {
      ...handlers,
      error: (errors)=> {
        deleteSubFromArray(observableSubscription);
        handlers.error(errors);
      },
      complete: ()=> {
        deleteSubFromArray(observableSubscription);
        handlers.complete();
      }
    }
    const unsubscribe = this.subscriptionClient.subscribe(body, observableHandlers);
    observableSubscription.unsubscribe = ()=> {
      deleteSubFromArray(observableSubscription);
      unsubscribe();
    }
    this.subscriptions.push(observableSubscription);
    return observableSubscription;
  }

  patchedSubscribe(
    flexibleRequestBody: FlexibleRequestBody,
    handlers: PatchedSubscriptionHandlers
  ) {
    let prevData = null;
    const patchedHandlers: SubscriptionHandlers = {
      ...handlers,
      next: (data) => {
        let patches: PatchOperation[] = [];
        if (prevData) {
          patches = createPatch(prevData, data)
            .map((operation: AddOperation | ReplaceOperation | RemoveOperation) => {
              return {
                ...operation,
                //add value to remove operation
                value: operation.op == 'remove' ? resolveJsonPointer(prevData, operation.path) : operation.value
              }
            });
        }
        prevData = data;
        handlers.next(data, patches);
      },
    }
    return this.subscribe(flexibleRequestBody, patchedHandlers);
  }
}
