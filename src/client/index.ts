import fetch from 'isomorphic-fetch'
import WebSocket from 'isomorphic-ws'
import {createClient} from 'graphql-ws'
import {
  Network,
  Environment,
  ClientOptions,
  RequestBody,
  SubscriptionHandlers,
} from '../types'
import {stringify, parse} from './utils'

export default function Client(options?: ClientOptions) {
  const endpoint = `https://${
    options?.network || Network.HederaTestnet
  }.api.hgraph.${options?.environment || Environment.Development}/v1/graphql`

  const subscriptionClient = createClient({
    url: endpoint.replace('https', 'wss'),
    webSocketImpl: WebSocket,
    connectionParams: {
      'content-type': 'application/json',
      ...(options?.token && {authorization: `Bearer ${options.token}`}),
      ...(options?.headers ?? {}),
    },
  })

  this.query = async function (body: RequestBody) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(options?.headers ?? {}),
      },
      body: stringify({
        query: body.query,
        variables: body.variables,
        operationName: body.operationName,
      }),
    })

    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`)

    return parse(await response.text())
  }

  this.subscribe = function (
    body: RequestBody,
    handlers: SubscriptionHandlers
  ) {
    return subscriptionClient.subscribe(body, handlers)
  }
}
