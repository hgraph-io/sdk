import fetch from 'isomorphic-fetch'
import WebSocket from 'isomorphic-ws'
import {createClient, Client as SubscriptionClient} from '../../graphql-ws/src'
import {
  Network,
  Environment,
  ClientOptions,
  Client,
  FlexibleRequestBody,
  SubscriptionHandlers,
} from '../types'
import {formatRequestBody} from './utils'

// generate types
//https://github.com/evanw/esbuild/issues/95#issuecomment-1007485134
export default class HgraphClient implements Client {
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient

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

    // This library gets exported as default in nextjs in cjs environment if instantiating at root level (outside of this function)
    const {parse} = require('json-bigint')({
      useNativeBigInt: true,
    })

    this.subscriptionClient = createClient({
      url: this.endpoint.replace('https', 'wss'),
      webSocketImpl: WebSocket,
      connectionParams: this.headers,
      jsonParse: parse,
    })
  }

  async query(flexibleRequestBody: FlexibleRequestBody) {
    const body = formatRequestBody(flexibleRequestBody)
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    })

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`)

    // This library gets exported as default in nextjs in cjs environment if instantiating at root level (outside of this function)
    const {parse} = require('json-bigint')({
      useNativeBigInt: true,
    })

    return parse(await response.text())
  }

  subscribe(
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) {
    const body = formatRequestBody(flexibleRequestBody)
    return this.subscriptionClient.subscribe(body, handlers)
  }
}
