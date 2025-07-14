import {describe, it, expect, vi} from 'vitest'

vi.mock('../src/client/graphql', () => ({}));
(globalThis as any).jest = {fn: vi.fn};

describe('package entry point exports', () => {
  it('exports HgraphClient as default', async () => {
    const sdk = await import('../src')
    const clientModule = await import('../src/client')
    expect(sdk.default).toBe(clientModule.default)
  })

  it('re-exports utility functions', async () => {
    const sdk = await import('../src')
    const utils = await import('../src/utils')
    expect(sdk.stripShardRealm).toBe(utils.stripShardRealm)
  })

  it('re-exports other modules', async () => {
    const sdk = await import('../src')
    expect(typeof sdk.HgraphContract).toBe('function')
    expect(typeof sdk.useHgraph).toBe('function')
    expect(typeof sdk.HgraphProvider).toBe('function')
    expect(typeof sdk.ERC20).toBe('function')
    expect(Array.isArray(sdk.ERC20_ABI)).toBe(true)
    expect(typeof sdk.ERC721).toBe('function')
    expect(Array.isArray(sdk.ERC721_ABI)).toBe(true)
  })
})
