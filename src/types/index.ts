import {ExecutionResult, GraphQLError} from 'graphql'
import {DocumentNode} from 'graphql/language/ast'

/*
 * Client setup
 */
export const enum Network {
  HederaMainnet = 'mainnet.hedera',
  HederaTestnet = 'testnet.hedera',
}

export const enum Environment {
  Development = 'dev',
  Production = 'io',
}

export interface ClientOptions {
  network?: Network
  environment?: Environment
  token?: string // jwt
  headers?: {
    [index: string]: string
  }
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
