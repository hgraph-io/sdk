import {DocumentNode} from 'graphql/language/ast'

export const enum Network {
  HederaMainnet = 'hedera-mainnet',
  HederaTestnet = 'hedera-testnet',
}

//https://graphql.org/learn/serving-over-http/#post-request
export interface RequestBody {
  operationName?: string
  query?: string | DocumentNode
  variables?: Record<string, unknown>
}

export interface RequestOptions {
  network?: Network
  endpoint?: string
  token?: string // jwt; if there's no token only public whitelisted queries allowed (currently none) w/ shared limit
  filter?: string //jmespath
  //TODO: these are probably not any?
  next?: (data: any) => void //TODO: no a
  error?: (err: any) => void //TODO:
  complete?: () => void //TODO:
  headers?: {
    [index: string]: string
  }
}
