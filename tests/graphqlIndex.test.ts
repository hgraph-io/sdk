import {describe, it, expect, jest} from '@jest/globals'

// ensure we load the real module rather than the mocked version from other tests

describe('client graphql index', () => {
  it('re-exports all query documents', async () => {
    jest.resetModules()
    jest.unmock('../src/client/graphql')

    const graphql = await import('../src/client/graphql')
    const AccountTransfers = (await import('../src/client/graphql/AccountTransfers.gql')).default
    const ContractEventLogs = (await import('../src/client/graphql/ContractEventLogs.gql')).default
    const RemainingAutomaticTokenAssociations = (await import('../src/client/graphql/RemainingAutomaticTokenAssociations.gql')).default
    const TokenHolders = (await import('../src/client/graphql/TokenHolders.gql')).default

    expect(graphql.AccountTransfers).toBe(AccountTransfers)
    expect(graphql.ContractEventLogs).toBe(ContractEventLogs)
    expect(graphql.RemainingAutomaticTokenAssociations).toBe(RemainingAutomaticTokenAssociations)
    expect(graphql.TokenHolders).toBe(TokenHolders)
  })
})
