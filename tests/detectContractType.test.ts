import {describe, it, expect, beforeEach, vi} from 'vitest'

const supportsInterfaceMock = vi.fn()
const decimalsMock = vi.fn()

vi.mock('ethers', () => ({
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
    supportsInterfaceMock.mockResolvedValue(true)
    const type = await detectContractType('0x0', {} as any)
    expect(type).toBe('erc721')
    expect(supportsInterfaceMock).toHaveBeenCalled()
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
