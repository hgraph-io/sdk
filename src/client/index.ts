import {print} from 'graphql/language/printer'
import {DocumentNode} from 'graphql/language/ast'
import {SubscribePayload} from 'graphql-ws'
import * as Hgraph from '../types'
import './utils/jsonBigInt'
import query from './query'
import subscribe from './subscribe'
import defaultOptions from './defaultOptions'

interface FinalRequestBody extends Hgraph.RequestBody {
  query?: string
}

function normalizeArgs(
  body: Hgraph.RequestBody | DocumentNode | String,
  _options?: Hgraph.RequestOptions
): {body: FinalRequestBody; options: Hgraph.RequestOptions} {
  const options = _options || {}
  // throw error if x-api-key header is passed in browser
  if (options?.headers?.['x-api-key'] && typeof window !== 'undefined')
    throw new Error(
      'It appears this is being run in a browser environment and is unsafe. Do not expose private keys on a front end!'
    )
  const args: {body: FinalRequestBody; options: Hgraph.RequestOptions} = {
    body: undefined,
    options: undefined,
  }

  if (typeof body === 'string') args.body = {query: body as string}
  // gql`...`
  else if ('kind' in body) args.body = {query: print(body)}
  else if ('query' in body && 'kind' in (body.query as DocumentNode)) {
    args.body = {query: print(body.query as DocumentNode)}
  } else if ('query' in body && typeof body.query === 'string') {
    args.body = body as FinalRequestBody
  } else throw new Error('The format of the request is malformed')

  //@ts-ignore
  args.body.operationName = body.operationName || options.operationName
  //@ts-ignore
  args.body.variables = body.variables || options.variables

  args.options = {
    ...defaultOptions,
    // override defaults
    ...options,

    endpoint:
      options.endpoint ||
      (args.body.query.trim().startsWith('subscription')
        ? defaultOptions.endpoint.replace('https', 'wss')
        : defaultOptions.endpoint),

    // make sure we keep the defaults unless they are explicity overridden
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  }

  return args
}

export default async (
  _body: Hgraph.RequestBody | DocumentNode | string,
  _options?: Hgraph.RequestOptions
) => {
  const {body, options} = normalizeArgs(_body, _options)

  // Make a subscription request
  if (body.query.trim().startsWith('subscription'))
    return subscribe(body as SubscribePayload, options)
  else return query(body, options)
}
