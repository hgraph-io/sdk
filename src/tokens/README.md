# Token Helpers

The SDK ships with lightweight wrappers around standard ERC-20 and ERC-721 contracts. Each wrapper uses `ethers.js` under the hood and exposes common methods so you can easily integrate token functionality in your application.

## Native vs. Contract Tokens

Hedera supports two ways to create tokens:

1. **Native tokens** minted through the Hedera Token Service (HTS). Balances and transfers for these tokens are tracked directly by the network and are queryable via mirror nodes.
2. **Contract tokens** implemented as smart contracts that follow the ERC‑20 or ERC‑721 interfaces.

The helpers in this package let you interact with ERC‑20 and ERC‑721 contracts using `ethers.js`. The `TokenHolders` GraphQL query, however, returns holders for **native tokens only**, since it relies on data from the `token_account` table provided by mirror nodes. To discover holders of contract tokens you must read contract events (e.g. `Transfer` logs) or query each account with `balanceOf`.

## ERC-20

```typescript
import {ERC20} from '@hgraph.io/sdk'
import {JsonRpcProvider} from 'ethers'

const provider = new JsonRpcProvider('https://your.rpc.url')
const token = new ERC20('0xTokenAddress', provider)

const balance = await token.balanceOf('0xAccount')
await token.transfer('0xRecipient', 100n)
```

## ERC-721

```typescript
import {ERC721} from '@hgraph.io/sdk'
import {JsonRpcProvider} from 'ethers'

const provider = new JsonRpcProvider('https://your.rpc.url')
const nft = new ERC721('0xCollectionAddress', provider)

const owner = await nft.ownerOf(1n)
const uri = await nft.tokenURI(1n)
await nft.safeTransferFrom('0xOwner', '0xReceiver', 1n)
```

## Querying Token Holders

The SDK includes a `TokenHolders` GraphQL query for retrieving the accounts that
hold a **native** token. It returns balances for both fungible and non‑fungible
HTS tokens. Contract-based ERC‑20 or ERC‑721 tokens are not indexed in this way
and therefore will not appear in the results.

```typescript
import HgraphClient, {Network, Environment, TokenHolders} from '@hgraph.io/sdk'

const client = new HgraphClient({
  network: Network.HederaTestnet,
  environment: Environment.Development,
})

const {data} = await client.query({
  query: TokenHolders,
  variables: {tokenId: '0xTokenAddress', limit: 100, offset: 0},
})

for (const holder of data.token_account) {
  console.log(holder.account_id, holder.balance)
}
```

To strongly type the returned data you can import the GraphQL schema
definitions that ship with the SDK:

```typescript
import type {Token_Account} from '@hgraph.io/sdk'

const {data} = await client.query<{
  token_account: Pick<Token_Account, 'account_id' | 'balance'>[]
}>({
  query: TokenHolders,
  variables: {tokenId: '0xTokenAddress', limit: 100, offset: 0},
})

data.token_account.forEach((holder) => {
  // holder has type Pick<Token_Account, 'account_id' | 'balance'>
  console.log(holder.account_id, holder.balance)
})
```
