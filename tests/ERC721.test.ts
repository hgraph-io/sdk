import {describe, it, expect, jest} from '@jest/globals'
import ERC721 from '../src/tokens/erc721'

describe('ERC721 wrapper', () => {
  it('calls underlying contract methods', async () => {
    const nft = new ERC721('0x0', {} as any)
    const mock = {
      name: jest.fn().mockResolvedValue('NFT'),
      symbol: jest.fn().mockResolvedValue('NFT'),
      supportsInterface: jest.fn().mockResolvedValue(true),
      balanceOf: jest.fn().mockResolvedValue(2n),
      ownerOf: jest.fn().mockResolvedValue('0xabc'),
      tokenURI: jest.fn().mockResolvedValue('uri'),
      getApproved: jest.fn().mockResolvedValue('0xdef'),
      isApprovedForAll: jest.fn().mockResolvedValue(true),
      approve: jest.fn().mockResolvedValue('tx0'),
      setApprovalForAll: jest.fn().mockResolvedValue('tx1'),
      transferFrom: jest.fn().mockResolvedValue('tx1'),
      safeTransferFrom: jest.fn().mockResolvedValue('tx2'),
    }
    ;(nft as any).contract = mock

    expect(await nft.name()).toBe('NFT')
    expect(await nft.symbol()).toBe('NFT')
    expect(await nft.ownerOf(1n)).toBe('0xabc')
    expect(await nft.tokenURI(1n)).toBe('uri')
    expect(await nft.supportsInterface('0x01')).toBe(true)
    expect(await nft.balanceOf('0xabc')).toBe(2n)
    expect(await nft.getApproved(1n)).toBe('0xdef')
    expect(await nft.isApprovedForAll('0xabc', '0xdef')).toBe(true)
    await nft.approve('0xdef', 1n)
    await nft.setApprovalForAll('0xdef', true)
    await nft.transferFrom('0xabc', '0xdef', 1n)
    await nft.safeTransferFrom('0xabc', '0xdef', 2n)
    await nft.safeTransferFrom('0xabc', '0xdef', 3n, '0x')

    expect(mock.name).toHaveBeenCalled()
    expect(mock.symbol).toHaveBeenCalled()
    expect(mock.ownerOf).toHaveBeenCalledWith(1n)
    expect(mock.tokenURI).toHaveBeenCalledWith(1n)
    expect(mock.supportsInterface).toHaveBeenCalledWith('0x01')
    expect(mock.balanceOf).toHaveBeenCalledWith('0xabc')
    expect(mock.getApproved).toHaveBeenCalledWith(1n)
    expect(mock.isApprovedForAll).toHaveBeenCalledWith('0xabc', '0xdef')
    expect(mock.approve).toHaveBeenCalledWith('0xdef', 1n)
    expect(mock.setApprovalForAll).toHaveBeenCalledWith('0xdef', true)
    expect(mock.transferFrom).toHaveBeenCalledWith('0xabc', '0xdef', 1n)
    expect(mock.safeTransferFrom).toHaveBeenNthCalledWith(1, '0xabc', '0xdef', 2n)
    expect(mock.safeTransferFrom).toHaveBeenNthCalledWith(2, '0xabc', '0xdef', 3n, '0x')
  })
})
