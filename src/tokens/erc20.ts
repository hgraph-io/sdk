import {Contract, type ContractRunner, type InterfaceAbi, type BigNumberish, type TransactionResponse} from 'ethers'

export const ERC20_ABI: InterfaceAbi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address account) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function transferFrom(address from, address to, uint256 amount) returns (bool)',
]

export default class ERC20 {
  public contract: Contract

  constructor(address: string, runner: ContractRunner) {
    this.contract = new Contract(address, ERC20_ABI, runner)
  }

  name(): Promise<string> {
    return this.contract.name()
  }

  symbol(): Promise<string> {
    return this.contract.symbol()
  }

  decimals(): Promise<number> {
    return this.contract.decimals()
  }

  totalSupply(): Promise<bigint> {
    return this.contract.totalSupply()
  }

  balanceOf(account: string): Promise<bigint> {
    return this.contract.balanceOf(account)
  }

  allowance(owner: string, spender: string): Promise<bigint> {
    return this.contract.allowance(owner, spender)
  }

  approve(spender: string, amount: BigNumberish): Promise<TransactionResponse> {
    return this.contract.approve(spender, amount)
  }

  transfer(to: string, amount: BigNumberish): Promise<TransactionResponse> {
    return this.contract.transfer(to, amount)
  }

  transferFrom(from: string, to: string, amount: BigNumberish): Promise<TransactionResponse> {
    return this.contract.transferFrom(from, to, amount)
  }
}
