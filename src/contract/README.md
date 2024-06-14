# HgraphContract

HgraphContract is designed to facilitate interaction with smart contracts on the Hedera network.

## Usage

### Importing the Library

To use the `HgraphContract` class, you need to import it along with the required types from the library:

```typescript
import {
    default as HgraphClient,
    Network, 
    Environment, 
    HgraphContract, 
    ContractQueryEventsParams,
} from '@hgraph.io/sdk';
```

### Creating a HgraphClient instance
```typescript
const options = {
  network: Network.HederaTestnet,
  environment: Environment.Development,
};

const hgClient = new HgraphClient(options);
```

### Creating a HgraphContract Instance
To create a contract instance, you need to provide the hedera contractId, contract ABI, and a hgraph client instance. 
The hgraph client instance is responsible for communicating with the Hgraph GraphQL platform.

```typescript
const contractOptions: ContractOptions = {
  contractId: '0.0.1234',
  abi: [/* ABI array */],
  client: hgClient,
};

const hgraphContract = new HgraphContract(contractOptions);
```

### Querying Events

You can query events from the contract using the `queryEvents` method. This method allows you to specify parameters such as limit, offset, and order.

```typescript
const queryParams: ContractQueryEventsParams = {
  limit: 10,
  offset: 0,
  order: 'desc',
};

const events = await hgraphContract.queryEvents(queryParams);
console.log(events);
```