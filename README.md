# Hgraph SDK

## Introduction

[Hgraph](https://hgraph.io) is a Web3 data infrastructure company focused on tooling for the Hedera network and beyond. You can [sign up for an account](https://hgraph.com/pricing) and access our [account dashboard console](https://console.hgraph.io). This SDK intends to make developing with our API easy, flexible, and fast.

### 📖 [View SDK Documentation →](https://docs.hgraph.com/category/hgraph-sdk)

If you’re new to GraphQL, you can learn more [GraphQL](https://graphql.org/).
Then, build queries using and [interactive editor](https://console.hgraph.io/editor).

## Versioning

This SDK is in active development in conjunction with the
[hgraph](https://hgraph.io) API.

We are working towards following [Semantic Versioning](https://semver.org)
versioning.

**Before a v1 major release there may be breaking changes on new releases. For
use in production, we recommend pinning an exact release - i.e `--save-exact`.**

## Installation & Usage

`npm i --save-exact @hgraph.io/sdk@latest`.

The default export of the SDK is a class that accepts configuration parameters.

### Authenticating

#### Using an API key (deprecated)

To authenticate using an API key, pass your API key to the `x-api-key` header on
each request.

#### Using a JWT

For front-end solutions, we plan to authenticate using json web tokens. See
<https://jwt.io/>. Currently, this functionality is limited, please reach out to
use to utilize this functionality.

## Examples

The following quick start template repos for different environments are
available:

- [node](https://github.com/hgraph-io/nodejs-template)
- [browser](https://github.com/hgraph-io/browser-template)
- [nextjs](https://github.com/hgraph-io/nextjs-template)
- [react](https://github.com/hgraph-io/react-template)

## Developing

The following instructions are for meant for contributing to this repo (or
hacking away). To run this code base locally use the following steps to get up
and running.

- `gh repo clone hgraph-io/sdk`
- `npm i`
- `npm run watch` : watch for file changes and build on change
- depend on local version of sdk by using local dependency: `npm i ../sdk'

### Debugging

- test ws connection:
  `wscat -s 'graphql-ws' -H 'x-api-key: <...>' -c wss://api.hgraph.dev/v1/graphql`

## Features

### Subscription Management

SDK includes built-in GraphQL subscription management capabilities, simplifying the process of handling and interacting with subscriptions. This feature encapsulates all active subscriptions and their lifecycle control within the `Client`.

#### Key Features

- The `subscribe` and `patchedSubscribe` methods return an immutable `ObservableSubscription` object.
- `ObservableSubscription` serves as both a subscription identifier and contains an `unsubscribe` method.
- `Client` methods for subscription management:
  ```typescript
  removeSubscription: (subscription: ObservableSubscription) => void
  removeAllSubscriptions: () => void
  getSubscribtions: () => ObservableSubscription[]
  ```

#### Example Usage

##### Creating a Subscription:

```typescript
import Client, { Network, Environment, ObservableSubscription } from '@hgraph.io/sdk';
const hg = new Client({
  network: Network.HederaMainnet,
  environment: Environment.Production,
});
const transactionSubscription: ObservableSubscription = hg.subscribe({
  query: `
  subscription LastTransaction {
    transaction(limit: 1, order_by: {consensus_timestamp: desc}) {
      id
      consensus_timestamp
    }
  }`
}, {
  next: (data) => {
    console.log(data);
  },
  error: (errors) => {
    console.error('LastTransaction subscription closed with errors:', errors);
  },
  complete: () => {
    console.log("LastTransaction subscription complete");
  }
});
```

##### Unsubscribing from an Active Subscription

Using the subscription object:
```typescript
transactionSubscription.unsubscribe();
```
Or using the client method:
```typescript
hg.removeSubscription(transactionSubscription);
```
> Attempting to unsubscribe from an already completed subscription will raise an exception to prevent unwanted side effects.

##### Unsubscribing from All Active Subscriptions

```typescript
hg.removeAllSubscriptions();
```
> When unsubscribing (by any method), the `complete` subscription handler is called.

##### Retrieving All Active Subscriptions

```typescript
const subscriptions: ObservableSubscription[] = hg.getSubscriptions();
```

### patchedSubscribe Method

The `patchedSubscribe` method extends the functionality of the existing `subscribe` method by providing detailed patches indicating changes in data. These patches follow the [RFC6902](https://datatracker.ietf.org/doc/html/rfc6902) standard, with operations such as "add", "remove", and "replace". This allows developers to precisely understand the modifications in the updated data, making it especially useful for scenarios like tracking ownership transfers of NFTs.


#### Patch Operation Structure:

```ts
interface PatchOperation {
  op: 'add' | 'remove' | 'replace';
  path: string;
  value: any;
}
```

- `op`: Indicates the type of operation performed.
- `path`: A JSON Pointer string that specifies the location in the data where the operation is performed. JSON Pointers are defined in [RFC6901](https://datatracker.ietf.org/doc/html/rfc6901).
- `value`: The value associated with the operation. For `add` and `replace` operations, this is the new value being added or replacing the old value. For `remove` operations, this is the value being removed.

#### Example Usage

When a change occurs, the method generates patches that describe the exact differences between the previous and current states. Here is a basic example demonstrating the usage of `patchedSubscribe`:

```ts
import Client, { Network, Environment } from '@hgraph.io/sdk';

const hg = new Client({
  network: Network.HederaTestnet,
  environment: Environment.Production,
});

const observableSpender = "12345678";

hg.patchedSubscribe({
  query: `
  subscription GetNFTs($spender: bigint!) {
    nft(where: { spender: { _eq: $spender } }) {
      token_id
      serial_number
      metadata
    }
  }`,
  variables: {
    spender: observableSpender
  }
}, {
  next: (data, patches) => {
    patches.forEach(patch => {
      switch (patch.op) {
        case 'add':
          console.log("New NFT grant rights to spender:", patch.value);
          break;
        case 'remove':
          console.log("NFT owner revoked rights:", patch.value);
          break;
        case 'replace':
          console.log(`NFT data replaced at path: ${patch.path}, replaced value:`, patch.value);
          break;
      }
    });
  },
  error: (err) => {
    console.error(err);
  },
  complete: () => {
    console.log("Subscription complete");
  }
});
```

> In this example, the `patchedSubscribe` method is used to subscribe to NFTs based on a spender. The `next` handler processes the patches to determine what NFTs has been added, removed or what data in NFT replaced.