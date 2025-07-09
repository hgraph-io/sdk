import {describe, it, expect, vi} from 'vitest'
import ERC721 from '../src/tokens/erc721'

describe('ERC721 wrapper', () => {
  it('calls underlying contract methods', async () => {
    const nft = new ERC721('0x0', {} as any)
    const mock = {
      name: vi.fn().mockResolvedValue('NFT'),
      symbol: vi.fn().mockResolvedValue('NFT'),
      ownerOf: vi.fn().mockResolvedValue('0xabc'),
      tokenURI: vi.fn().mockResolvedValue('uri'),
      transferFrom: vi.fn().mockResolvedValue('tx1'),
      safeTransferFrom: vi.fn().mockResolvedValue('tx2'),
    }
    ;(nft as any).contract = mock

    expect(await nft.name()).toBe('NFT')
    expect(await nft.symbol()).toBe('NFT')
    expect(await nft.ownerOf(1n)).toBe('0xabc')
    expect(await nft.tokenURI(1n)).toBe('uri')
    await nft.transferFrom('0xabc', '0xdef', 1n)
    await nft.safeTransferFrom('0xabc', '0xdef', 2n)

    expect(mock.name).toHaveBeenCalled()
    expect(mock.symbol).toHaveBeenCalled()
    expect(mock.ownerOf).toHaveBeenCalledWith(1n)
    expect(mock.tokenURI).toHaveBeenCalledWith(1n)
    expect(mock.transferFrom).toHaveBeenCalledWith('0xabc', '0xdef', 1n)
    expect(mock.safeTransferFrom).toHaveBeenCalledWith('0xabc', '0xdef', 2n)
  })
})
