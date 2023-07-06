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
