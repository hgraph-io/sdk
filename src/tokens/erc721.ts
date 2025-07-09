import {Contract, type ContractRunner, type InterfaceAbi, type BigNumberish, type TransactionResponse} from 'ethers'

export const ERC721_ABI: InterfaceAbi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function tokenURI(uint256 tokenId) view returns (string)',
  'function transferFrom(address from, address to, uint256 tokenId)',
  'function safeTransferFrom(address from, address to, uint256 tokenId)',
]

export default class ERC721 {
  public contract: Contract

  constructor(address: string, runner: ContractRunner) {
    this.contract = new Contract(address, ERC721_ABI, runner)
  }

  name(): Promise<string> {
    return this.contract.name()
  }

  symbol(): Promise<string> {
    return this.contract.symbol()
  }

  ownerOf(tokenId: BigNumberish): Promise<string> {
    return this.contract.ownerOf(tokenId)
  }

  tokenURI(tokenId: BigNumberish): Promise<string> {
    return this.contract.tokenURI(tokenId)
  }

  transferFrom(from: string, to: string, tokenId: BigNumberish): Promise<TransactionResponse> {
    return this.contract.transferFrom(from, to, tokenId)
  }

  safeTransferFrom(from: string, to: string, tokenId: BigNumberish): Promise<TransactionResponse> {
    return this.contract.safeTransferFrom(from, to, tokenId)
  }
}
