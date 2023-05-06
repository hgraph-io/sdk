import WebSocket from 'isomorphic-ws'
import {createClient, SubscribePayload} from 'graphql-ws'
import * as Hgraph from '../types'

export default async function subscribe(
  body: SubscribePayload,
  options?: Hgraph.RequestOptions
) {
  const {endpoint, headers, filter, token} = options

  const client = createClient({
    url: endpoint,
    webSocketImpl: WebSocket,
    connectionParams: {
      headers,
      // 	authorization: 'Bearer test'
    },
  })

  return client.subscribe(body, {
    next: options.next,
    error: options.error || ((e) => console.error(e)),
    complete: options.complete || (() => {}),
  })
}
