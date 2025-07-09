# Token Helpers

The SDK ships with lightweight wrappers around standard ERC-20 and ERC-721 contracts. Each wrapper uses `ethers.js` under the hood and exposes common methods so you can easily integrate token functionality in your application.

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
