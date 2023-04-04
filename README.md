# Hgraph SDK

## Introduction

[Hgraph](https://hgraph.io) provides data an API services. You can sign up for
an account at <https://console.hgraph.io>

This SDK intends to make developing with our API fun, fast, and powerful.

If you’re new to GraphQL, you can learn more [GraphQL](https://graphql.org/).
Then, build queries using and interactive editor at <https://console.hgraph.io/editor>.

## Versioning

This SDK is in active development in conjunction with the
[hgraph](https://hgraph.io) API.

We are working towards following [Semantic Versioning](https://semver.org)
versioning.

**Before a v1 major release there may be breaking changes on new releases. If
using in production, we recommend pinning an exact release.**

## Installation & Usage

The package can be installed using `npm`, i.e. `npm i @hgraph.io/sdk@0.0.1`. To
install the most current release change `0.0.1` to the most current version.

The default export of the SDK is a function that accepts two parameters. The
first parameter is a GraphQL query, either a string or an AST using
`graphql-taq`. The second parameter is a configuration object.

The following is pseudo-code. See the examples section for a working code
snippet.

```typescript
import hg from '@hgraph.io/sdk'


const query = `
query TransactionsLast24Hrs {
  transactions_last_24hrs {
    count
    updated_at
  }
}
`

const options = {
  headers: {
    'x-api-key': '<HGRAPH_API_KEY>
  }
}

await hg(query, options)
```

### Configuration options

The second parameter passed to the hg function accepts a configuration object.
This is used for authentication as setting additional headers. Additionally,
there is a helper function that filters data returned from the API using
[jmespath](https://jmespath.org/).

```typescript
{
  headers: {
    'x-api-key': '<HGRAPH_API_KEY>', // from https://console.hgraph.io
    'x-hgraph-network': 'hedera-mainnet' // default Network.HederaMainnet, see src/types.ts & src/defaultOptions.ts
  },
  filter: '<String filter accepted by jmespath>', // default undefined
  endpoint: 'https://api.hgraph.dev/v1/graphql', // default
}

```

### Authenticating

#### Using an API key

To authenticate using an API key, pass your API key to the `x-api-key` header on
each request.

#### Using a JWT

For front-end solutions, we plan to authenticate using json web tokens. See
<https://jwt.io/>. Currently, this functionality is limited.

## Examples

### Query

```typescript
import hg from '@hgraph.io/sdk'
// import gql from 'graphql-tag';

// the client can take a string or a a GraphQL AST such as that produced by graphql-tag
const query = `
query TransactionsLast24Hrs {
  transactions_last_24hrs {
    count
    updated_at
  }
}
`

async function main() {
  const queryResult = await hg(query, {
    headers: {
      'x-api-key': process.env.HGRAPH_API_KEY,
    },
  })

  console.dir(queryResult, {depth: null})
}

main()
```

### Subscription

```typescript
import hg from '@hgraph.io/sdk'

const subscription = `
subscription LatestTransaction {
  transaction(limit: 1, order_by: {consensus_timestamp: desc}) {
    consensus_timestamp
  }
}`

async function main() {
  const unsubscribe = await hg(LatestTransaction, {
    // The client supports filtering the response date using jmespath -  https://jmespath.org/
    filter: 'data.transaction[0].consensus_timestamp',
    next: (data: bigint) => {
      const diff = (BigInt(new Date().getTime()) - data / 1000000n) / 1000n
      console.log(`consensus_timestamp was about ${diff} seconds ago`)
    },
    error: (e: string) => {
      console.error(e)
    },
    complete: () => {
      console.log('Optionally do some cleanup')
    },
    headers: {
      'x-api-key': process.env.HGRAPH_API_KEY,
    },
  })

  // clear subscription
  setTimeout(unsubscribe, 3000)
}
```

## Developing

The following instructions are for meant for contributing to this repo (or
hacking away). To run this code base locally use the following steps to get up
and running.

- `gh repo clone hgraph-io/sdk`
- `npm i`
- `cp .env.example .env`, then add the `HGRAPH_API_KEY`
- `npm run watch` : watch for file changes and build on change
- run the example code `node dist/examples/index.js`

### Debugging

- test ws connection:
  `wscat -s 'graphql-ws' -H 'x-api-key: <...>' -c wss://api.hgraph.dev/v1/graphql`
