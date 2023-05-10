import {DocumentNode} from 'graphql/language/ast'
import {print} from 'graphql/language/printer'
import {FlexibleRequestBody, GraphQLRequestPayload} from '../../types'

export default function formatRequestBody(
  body: FlexibleRequestBody
): GraphQLRequestPayload {
  // string
  if (typeof body === 'string') return {query: body}
  // DocumentNode
  else if ('kind' in body) return {query: print(body)}
  // FlexibleRequestBody w/ {query: string}
  else if ('query' in body && typeof body.query === 'string')
    return body as GraphQLRequestPayload
  // FlexibleRequestBody w/ {query:DocumentNode}
  else if ('query' in body && 'kind' in (body.query as DocumentNode))
    return {...body, query: print(body.query as DocumentNode)}
  else throw new Error('The format of the request is malformed')
}
