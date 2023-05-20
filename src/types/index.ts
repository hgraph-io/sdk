import {ExecutionResult, GraphQLError} from 'graphql'
import {DocumentNode} from 'graphql/language/ast'
import {Client as SubscriptionClient} from '../../graphql-ws/src'

/*
 * Client setup
 */
export enum Network {
  HederaMainnet = 'mainnet',
  HederaTestnet = 'testnet',
  // HederaMainnet = 'mainnet.hedera',
  // HederaTestnet = 'testnet.hedera',
}

export enum Environment {
  Development = 'dev',
  Production = 'io',
}

export interface ClientOptions {
  network?: Network
  environment?: Environment
  token?: string // jwt
  headers?: Record<string, string>
  patchBigIntToJSON?: boolean
}

export interface Client {
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient
  query: (flexibleRequestBody: FlexibleRequestBody) => Promise<ExecutionResult>
  subscribe: (
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) => () => void
}

export default class HgraphClient implements Client {
  // constructor(options?: ClientOptions)
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient
  query: (flexibleRequestBody: FlexibleRequestBody) => Promise<ExecutionResult>
  subscribe: (
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) => () => void
}

/*
 * Requests
 */

// Flexible arguments for client.query() & client.subscribe()
export type FlexibleRequestBody = string | DocumentNode | RequestBody

export interface RequestBody {
  query: string | DocumentNode
  operationName?: string
  variables?: Record<string, unknown>
  extensions?: Record<string, unknown>
}
// GraphQL request payload
// https://graphql.org/learn/serving-over-http/#post-request
export interface GraphQLRequestPayload extends RequestBody {
  query: string
}

/*
 * Responses
 */
// https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md
export interface SubscriptionHandlers {
  next: (data: ExecutionResult) => void
  error: (err: GraphQLError[]) => void
  complete: () => void
}

/*
 * Server
 */

declare function createJws(
  privateKey: string,
  accountId: string,
  options: {
    network: string
    audience?: string
    expirationTime?: string
    issuer?: string
  }
): string
