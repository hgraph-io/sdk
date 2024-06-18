# Hgraph SDK

## Introduction

[Hgraph](https://hgraph.io) provides data and API services. You can sign up for
an account at <https://console.hgraph.io>

This SDK intends to make developing with our API fun, fast, and powerful.

If you’re new to GraphQL, you can learn more [GraphQL](https://graphql.org/).
Then, build queries using and interactive editor at
<https://console.hgraph.io/editor>.

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
- depend on local version of sdk by using local dependency: `npi i ../sdk'

### Debugging

- test ws connection:
  `wscat -s 'graphql-ws' -H 'x-api-key: <...>' -c wss://api.hgraph.dev/v1/graphql`

## Features

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