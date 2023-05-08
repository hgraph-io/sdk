import {DocumentNode} from 'graphql/language/ast'

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

//https://graphql.org/learn/serving-over-http/#post-request
export interface _RequestBody {
  query: string | DocumentNode
  operationName?: string
  variables?: Record<string, unknown>
}

export type RequestBody = _RequestBody | DocumentNode | string

export interface SubscriptionHandlers {
  next?: (data: any) => void
  error?: (err: any) => void
  complete?: () => void
}
