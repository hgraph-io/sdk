import {describe, it, expect, beforeEach, jest} from '@jest/globals'

const supportsInterfaceMock = jest.fn()
const decimalsMock = jest.fn()

jest.mock('ethers', () => ({
  Contract: class {
    constructor(_address: string, abi: any) {
      if (abi.some((s: string) => s.includes('supportsInterface'))) {
        ;(this as any).supportsInterface = supportsInterfaceMock
      }
      if (abi.some((s: string) => s.includes('decimals'))) {
        ;(this as any).decimals = decimalsMock
      }
    }
  },
  JsonRpcProvider: class {},
}))

import {detectContractType} from '../src/contract/detectContractType'

beforeEach(() => {
  supportsInterfaceMock.mockReset()
  decimalsMock.mockReset()
})

describe('detectContractType', () => {
  it('returns erc721 when supportsInterface returns true', async () => {
    supportsInterfaceMock.mockResolvedValueOnce(true)
    const type = await detectContractType('0x0', {} as any)
    expect(type).toBe('erc721')
    expect(supportsInterfaceMock).toHaveBeenCalled()
  })

  it('returns erc1155 when supportsInterface detects the interface', async () => {
    supportsInterfaceMock.mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    const type = await detectContractType('0x0', {} as any)
    expect(type).toBe('erc1155')
    expect(supportsInterfaceMock).toHaveBeenCalledTimes(2)
    expect(decimalsMock).not.toHaveBeenCalled()
  })

  it('returns erc20 when decimals() is available', async () => {
    supportsInterfaceMock.mockRejectedValue(new Error('no erc165'))
    decimalsMock.mockResolvedValue(18)
    const type = await detectContractType('0x0', {} as any)
    expect(type).toBe('erc20')
    expect(decimalsMock).toHaveBeenCalled()
  })

  it('returns unknown when neither interface is detected', async () => {
    supportsInterfaceMock.mockRejectedValue(new Error('no erc165'))
    decimalsMock.mockRejectedValue(new Error('no erc20'))
    const type = await detectContractType('0x0', {} as any)
    expect(type).toBe('unknown')
  })
})
