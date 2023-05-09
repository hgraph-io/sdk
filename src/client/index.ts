import fetch from 'isomorphic-fetch'
import WebSocket from 'isomorphic-ws'
import {createClient, Client as SubscriptionClient} from '../../graphql-ws/src'
import {
  Network,
  Environment,
  ClientOptions,
  FlexibleRequestBody,
  SubscriptionHandlers,
} from '../types'
import {stringify, parse, patchBigIntToJSON, formatRequestBody} from './utils'

// generate types
//https://github.com/evanw/esbuild/issues/95#issuecomment-1007485134
export default class Client {
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient

  constructor(options?: ClientOptions) {
    // add to BigInt prototype for JSON.stringify
    if (options?.patchBigIntToJSON !== false) patchBigIntToJSON()

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

  /*
   * Query
   */
  async query(flexibleRequestBody: FlexibleRequestBody) {
    const body = formatRequestBody(flexibleRequestBody)
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: this.headers,
      body: stringify(body),
    })

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`)

    return parse(await response.text())
  }

  /*
   * Subscription
   */
  subscribe(
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) {
    const body = formatRequestBody(flexibleRequestBody)
    return this.subscriptionClient.subscribe(body, handlers)
  }
}
