import {describe, it, expect} from '@jest/globals'

describe('types index exports', () => {
  it('re-exports hooks and provider', async () => {
    const types = await import('../src/types')
    const hooks = await import('../src/hooks/useHgraph')
    const provider = await import('../src/context/HgraphProvider')
    expect(types.useHgraph).toBe(hooks.useHgraph)
    expect(types.HgraphProvider).toBe(provider.HgraphProvider)

    // accessing these triggers getter functions defined in the index
    const ethers = await import('ethers')
    expect(types.EthersContract).toBe(ethers.Contract)
    expect(types.EventLogDescription).toBe(ethers.LogDescription)
  })

  it('exports enums and default client class', async () => {
    const types = await import('../src/types')
    expect(types.Network.HederaMainnet).toBe('mainnet.hedera')
    expect(types.Environment.Development).toBe('dev')
    expect(typeof types.default).toBe('function')
    const inst = new types.default()
    expect(inst).toBeInstanceOf(types.default)
  })
})
