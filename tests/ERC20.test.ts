import {describe, it, expect, jest} from '@jest/globals'
import ERC20 from '../src/tokens/erc20'

describe('ERC20 wrapper', () => {
  it('calls underlying contract methods', async () => {
    const token = new ERC20('0x0', {} as any)
    const mock = {
      name: jest.fn().mockResolvedValue('Token'),
      symbol: jest.fn().mockResolvedValue('TKN'),
      decimals: jest.fn().mockResolvedValue(18),
      totalSupply: jest.fn().mockResolvedValue(1000n),
      balanceOf: jest.fn().mockResolvedValue(5n),
      allowance: jest.fn().mockResolvedValue(1n),
      approve: jest.fn().mockResolvedValue('tx0'),
      transfer: jest.fn().mockResolvedValue('tx1'),
      transferFrom: jest.fn().mockResolvedValue('tx2'),
    }
    ;(token as any).contract = mock

    expect(await token.name()).toBe('Token')
    expect(await token.symbol()).toBe('TKN')
    expect(await token.decimals()).toBe(18)
    expect(await token.totalSupply()).toBe(1000n)
    expect(await token.balanceOf('0xabc')).toBe(5n)
    expect(await token.allowance('0xabc', '0xdef')).toBe(1n)
    await token.approve('0xdef', 3n)
    await token.transfer('0xdef', 1n)
    await token.transferFrom('0xabc', '0xdef', 2n)

    expect(mock.name).toHaveBeenCalled()
    expect(mock.symbol).toHaveBeenCalled()
    expect(mock.decimals).toHaveBeenCalled()
    expect(mock.totalSupply).toHaveBeenCalled()
    expect(mock.balanceOf).toHaveBeenCalledWith('0xabc')
    expect(mock.allowance).toHaveBeenCalledWith('0xabc', '0xdef')
    expect(mock.approve).toHaveBeenCalledWith('0xdef', 3n)
    expect(mock.transfer).toHaveBeenCalledWith('0xdef', 1n)
    expect(mock.transferFrom).toHaveBeenCalledWith('0xabc', '0xdef', 2n)
  })
})
