import fetch from 'isomorphic-fetch'
import WebSocket from 'isomorphic-ws'
import {createClient} from 'graphql-ws'
import {
  Network,
  Environment,
  ClientOptions,
  FlexibleRequestBody,
  SubscriptionHandlers,
} from '../types'
import {stringify, parse, formatRequestBody} from './utils'

export default function Client(options?: ClientOptions) {
  /*
   * Shared properties for queries & subscriptions
   */
  const endpoint = `https://${
    options?.network || Network.HederaTestnet
  }.api.hgraph.${options?.environment || Environment.Development}/v1/graphql`

  const headers = {
    'content-type': 'application/json',
    ...(options?.headers ?? {}),
    ...(options?.token && {authorization: `Bearer ${options.token}`}),
  }

  /*
   * Query
   */
  this.query = async function (flexibleRequestBody: FlexibleRequestBody) {
    const body = formatRequestBody(flexibleRequestBody)
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: stringify(body),
    })

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`)

    return parse(await response.text())
  }

  /*
   * Subscription
   */
  const subscriptionClient = createClient({
    url: endpoint.replace('https', 'wss'),
    webSocketImpl: WebSocket,
    connectionParams: headers,
    jsonMessageReviver: parse,
    jsonMessageReplacer: stringify,
  })

  this.subscribe = function (
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) {
    const body = formatRequestBody(flexibleRequestBody)
    return subscriptionClient.subscribe(body, handlers)
  }
}
