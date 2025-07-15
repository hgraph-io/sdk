import {Contract as EthersContract, InterfaceAbi, LogDescription} from 'ethers'
import {stripShardRealm} from '../utils'
import {ContractEventLogs} from '../client/graphql'
import HgraphClient, {
  Contract,
  ContractOptions,
  ContractQueryEventsParams,
} from '../types'
import type {Contract_Log} from '../types'

export {LogDescription, InterfaceAbi, Contract as EthersContract} from 'ethers'

export class HgraphContract implements Contract {
  public contractId: string
  public abi: InterfaceAbi
  public client: HgraphClient
  public contract: EthersContract

  constructor(options: ContractOptions) {
    this.contractId = options.contractId
    this.abi = options.abi
    this.client = options.client
    // We don't need a valid contract evm address for parsing;
    this.contract = new EthersContract(
      '0x0000000000000000000000000000000000000000',
      options.abi
    )
  }

  async queryEvents(params: ContractQueryEventsParams = {}) {
    const {limit = 10, offset = 0, order = 'desc'} = params

    const {data: eventLogs, errors} = await this.client.query<{
      logs: Pick<
        Contract_Log,
        'data' | 'topic0' | 'topic1' | 'topic2' | 'topic3'
      >[]
    }>({
      query: ContractEventLogs,
      variables: {
        contract_id: stripShardRealm(this.contractId),
        limit,
        offset,
        order,
      },
    })

    if (errors?.length) {
      throw errors[0]
    }

    const parsedEvents: LogDescription[] = []
    // format logs to fit ethers logs structure
    const formattedLogs: {
      topics: string[]
      data: string
    }[] = []
    const formatHex = (value: string) => '0x' + value.slice(2).padStart(64, '0')

    eventLogs.logs?.forEach((log) => {
      if (!log.data) return

      const topics = [log.topic0, log.topic1, log.topic2, log.topic3]
        .filter(Boolean)
        .map((topic) => formatHex(topic!))

      formattedLogs.push({
        data: formatHex(log.data),
        topics,
      })
    })

    // decode logs
    formattedLogs.forEach((log) => {
      try {
        const eventFragment = this.contract.interface.parseLog(log)

        if (!eventFragment) return
        parsedEvents.push(eventFragment)
      } catch (error) {
        console.error('Error decoding log:', error)
      }
    })

    return parsedEvents
  }
}

export {detectContractType, type ContractType} from './detectContractType'
