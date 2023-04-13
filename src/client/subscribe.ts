import WebSocket from 'isomorphic-ws'
import {createClient, SubscribePayload} from 'graphql-ws'
import jmespath from 'jmespath'
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
    next: (data) => options.next(filter ? jmespath.search(data, filter) : data),
    error: options.error || ((e) => console.error(e)),
    complete: options.complete || (() => {}),
  })
}
