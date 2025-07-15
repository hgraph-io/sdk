import {describe, it, expect} from '@jest/globals'

// ensure the token helpers are re-exported correctly from the index

describe('tokens index exports', () => {
  it('re-exports ERC20 and ERC721 helpers', async () => {
    const tokens = await import('../src/tokens')
    const erc20 = await import('../src/tokens/erc20')
    const erc721 = await import('../src/tokens/erc721')

    expect(tokens.ERC20).toBe(erc20.default)
    expect(tokens.ERC20_ABI).toBe(erc20.ERC20_ABI)
    expect(tokens.ERC721).toBe(erc721.default)
    expect(tokens.ERC721_ABI).toBe(erc721.ERC721_ABI)
  })
})
