import {Contract, type InterfaceAbi, type JsonRpcProvider} from 'ethers'

const ERC165_ABI: InterfaceAbi = [
  'function supportsInterface(bytes4 interfaceId) view returns (bool)',
]

const ERC20_ABI: InterfaceAbi = ['function decimals() view returns (uint8)']

export type ContractType = 'erc20' | 'erc721' | 'erc1155' | 'unknown'

export async function detectContractType(
  address: string,
  provider: JsonRpcProvider,
): Promise<ContractType> {
  const erc165 = new Contract(address, ERC165_ABI, provider)
  try {
    if (await erc165.supportsInterface('0x80ac58cd')) {
      return 'erc721'
    }
    if (await erc165.supportsInterface('0xd9b67a26')) {
      return 'erc1155'
    }
  } catch {
    // supportsInterface not available
  }

  const erc20 = new Contract(address, ERC20_ABI, provider)
  try {
    await erc20.decimals()
    return 'erc20'
  } catch {
    // decimals not available
  }

  return 'unknown'
}
