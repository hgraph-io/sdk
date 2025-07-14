import {Contract, type ContractRunner, type InterfaceAbi, type BigNumberish, type TransactionResponse} from 'ethers'

export const ERC721_ABI: InterfaceAbi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function supportsInterface(bytes4 interfaceId) view returns (bool)',
  'function balanceOf(address owner) view returns (uint256)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function tokenURI(uint256 tokenId) view returns (string)',
  'function getApproved(uint256 tokenId) view returns (address)',
  'function isApprovedForAll(address owner, address operator) view returns (bool)',
  'function transferFrom(address from, address to, uint256 tokenId)',
  'function safeTransferFrom(address from, address to, uint256 tokenId)',
  'function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)',
  'function approve(address to, uint256 tokenId)',
  'function setApprovalForAll(address operator, bool approved)',
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

  supportsInterface(interfaceId: string): Promise<boolean> {
    return this.contract.supportsInterface(interfaceId)
  }

  balanceOf(owner: string): Promise<bigint> {
    return this.contract.balanceOf(owner)
  }

  ownerOf(tokenId: BigNumberish): Promise<string> {
    return this.contract.ownerOf(tokenId)
  }

  tokenURI(tokenId: BigNumberish): Promise<string> {
    return this.contract.tokenURI(tokenId)
  }

  getApproved(tokenId: BigNumberish): Promise<string> {
    return this.contract.getApproved(tokenId)
  }

  isApprovedForAll(owner: string, operator: string): Promise<boolean> {
    return this.contract.isApprovedForAll(owner, operator)
  }

  transferFrom(from: string, to: string, tokenId: BigNumberish): Promise<TransactionResponse> {
    return this.contract.transferFrom(from, to, tokenId)
  }

  safeTransferFrom(from: string, to: string, tokenId: BigNumberish, data?: string): Promise<TransactionResponse> {
    if (data !== undefined) {
      return this.contract.safeTransferFrom(from, to, tokenId, data)
    }
    return this.contract.safeTransferFrom(from, to, tokenId)
  }

  approve(to: string, tokenId: BigNumberish): Promise<TransactionResponse> {
    return this.contract.approve(to, tokenId)
  }

  setApprovalForAll(operator: string, approved: boolean): Promise<TransactionResponse> {
    return this.contract.setApprovalForAll(operator, approved)
  }
}
