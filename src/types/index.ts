import React from 'react'
import {ExecutionResult, GraphQLError} from 'graphql'
import {
  Contract as EthersContract,
  InterfaceAbi,
  LogDescription as EventLogDescription,
  type ContractRunner,
  type BigNumberish,
  type TransactionResponse,
  type JsonRpcProvider,
} from 'ethers'
import {DocumentNode} from 'graphql/language/ast'
import {Client as SubscriptionClient} from '../../graphql-ws/src'
import {useHgraph} from '../hooks/useHgraph'
import {HgraphProvider} from '../context/HgraphProvider'

export {useHgraph, HgraphProvider}
export {
  Contract as EthersContract,
  InterfaceAbi,
  LogDescription as EventLogDescription,
} from 'ethers'
export * from '../client/graphql'
export type * from './graphql'

/*
 * Common
 */
export type Order = 'asc' | 'desc'

/*
 * HgraphProvider
 */

export interface HgraphProviderProps<HgraphInstance> {
  client: HgraphInstance
  children: React.ReactNode | React.ReactNode[] | null
}

export interface HgraphContextValue {
  client: Client
}

export declare const HgraphContext: React.Context<HgraphContextValue | null>

/*
 * Client setup
 */
export enum Network {
  // HederaMainnet = 'mainnet',
  // HederaTestnet = 'testnet',
  HederaMainnet = 'mainnet.hedera',
  HederaTestnet = 'testnet.hedera',
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
  // new (options?: ClientOptions)
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient
  removeSubscription: (subscription: ObservableSubscription) => void
  removeAllSubscriptions: () => void
  getSubscriptions: () => ObservableSubscription[]
  /**
   * @deprecated Use `getSubscriptions` instead.
   */
  getSubscribtions: () => ObservableSubscription[]
  query: <T>(
    flexibleRequestBody: FlexibleRequestBody,
    abortSignal?: AbortSignal
  ) => Promise<ExecutionResult<T>>
  subscribe: (
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) => ObservableSubscription
  patchedSubscribe: (
    flexibleRequestBody: FlexibleRequestBody,
    handlers: PatchedSubscriptionHandlers
  ) => ObservableSubscription
}

export default class HgraphClient implements Client {
  constructor(options?: ClientOptions) {}
  endpoint: string
  headers: Record<string, string>
  subscriptionClient: SubscriptionClient
  private subscriptions: ObservableSubscription[]
  removeSubscription: (subscription: ObservableSubscription) => void
  removeAllSubscriptions: () => void
  getSubscriptions: () => ObservableSubscription[]
  /**
   * @deprecated Use `getSubscriptions` instead.
   */
  getSubscribtions: () => ObservableSubscription[]
  query: <T>(
    flexibleRequestBody: FlexibleRequestBody,
    abortSignal?: AbortSignal
  ) => Promise<ExecutionResult<T>>
  subscribe: (
    flexibleRequestBody: FlexibleRequestBody,
    handlers: SubscriptionHandlers
  ) => ObservableSubscription
  patchedSubscribe: (
    flexibleRequestBody: FlexibleRequestBody,
    handlers: PatchedSubscriptionHandlers
  ) => ObservableSubscription
}

/*
 * Contract setup
 */
export interface ContractOptions {
  contractId: string
  abi: InterfaceAbi
  client: HgraphClient
}

export interface Contract {
  contractId: string
  abi: InterfaceAbi
  client: HgraphClient
  queryEvents: (ContractQueryEventsParams) => Promise<EventLogDescription[]>
}

export interface ContractQueryEventsParams {
  limit?: number
  offset?: number
  order?: Order
}

export interface ObservableSubscription {
  readonly handlers: SubscriptionHandlers
  unsubscribe: () => void
}

export declare class HgraphContract {
  public contractId: string
  public abi: InterfaceAbi
  public client: HgraphClient
  public contract: EthersContract

  constructor(options: ContractOptions)
  public queryEvents: (
    params?: ContractQueryEventsParams
  ) => Promise<EventLogDescription[]>
}

/*
 * ERC-20
 */
export declare const ERC20_ABI: InterfaceAbi

export declare class ERC20 {
  public contract: EthersContract
  constructor(address: string, runner: ContractRunner)
  name(): Promise<string>
  symbol(): Promise<string>
  decimals(): Promise<number>
  totalSupply(): Promise<bigint>
  balanceOf(account: string): Promise<bigint>
  allowance(owner: string, spender: string): Promise<bigint>
  approve(spender: string, amount: BigNumberish): Promise<TransactionResponse>
  transfer(to: string, amount: BigNumberish): Promise<TransactionResponse>
  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish
  ): Promise<TransactionResponse>
}

/*
 * ERC-721
 */
export declare const ERC721_ABI: InterfaceAbi

export declare class ERC721 {
  public contract: EthersContract
  constructor(address: string, runner: ContractRunner)
  name(): Promise<string>
  symbol(): Promise<string>
  supportsInterface(interfaceId: string): Promise<boolean>
  balanceOf(owner: string): Promise<bigint>
  ownerOf(tokenId: BigNumberish): Promise<string>
  tokenURI(tokenId: BigNumberish): Promise<string>
  getApproved(tokenId: BigNumberish): Promise<string>
  isApprovedForAll(owner: string, operator: string): Promise<boolean>
  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish
  ): Promise<TransactionResponse>
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data?: string
  ): Promise<TransactionResponse>
  approve(to: string, tokenId: BigNumberish): Promise<TransactionResponse>
  setApprovalForAll(
    operator: string,
    approved: boolean
  ): Promise<TransactionResponse>
}

export type ContractType = 'erc20' | 'erc721' | 'erc1155' | 'unknown'

export function detectContractType(
  address: string,
  provider: JsonRpcProvider,
): Promise<ContractType>

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
 * Utils
 */

export function stripShardRealm(accountId: string): number

/*
 * JSON Patch Operation
 */
export interface PatchOperation {
  op: 'add' | 'remove' | 'replace'
  path: string // https://datatracker.ietf.org/doc/html/rfc6901
  value: any
}

/*
 * Responses for patchedSubscribe
 */
// https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md
// https://datatracker.ietf.org/doc/html/rfc6902
export interface PatchedSubscriptionHandlers {
  next: <TData, TExtension>(
    data: ExecutionResult<TData, TExtension>,
    patches: PatchOperation[]
  ) => void
  error: (err: GraphQLError[]) => void
  complete: () => void
}

/*
 * Responses
 */
// https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md
export interface SubscriptionHandlers {
  next: <T>(data: ExecutionResult<T>) => void
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
    issuer: string // Hedera accound id: https://docs.hedera.com/hedera/core-concepts/accounts/account-properties
    claims: Record<string, unknown> // https://tools.ietf.org/html/rfc7519#section-4.1
    audience: string // https://tools.ietf.org/html/rfc7519#section-4.1.3
    expirationTime: string // https://tools.ietf.org/html/rfc7519#section-4.1.4
  }
): Promise<string>

declare function verifyJws(
  jws: string,
  cryptoAccountPublicKey: string
): Promise<unknown>
