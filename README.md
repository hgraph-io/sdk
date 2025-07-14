# Hgraph SDK

[Hgraph](https://hgraph.io) is a Web3 data infrastructure company focused on tooling for the Hedera network and beyond. You can [sign up for an account](https://hgraph.com/pricing) and access our [account dashboard console](https://console.hgraph.io). This SDK intends to make developing with our API easy, flexible, and fast.

## Hgraph Docs 📖
- [Hgraph SDK documentation →](https://docs.hgraph.com/category/hgraph-sdk)
- [About the GraphQL API →](https://docs.hgraph.com/graphql-api/subscriptions)
- [About GraphQL subscriptions →](https://docs.hgraph.com/graphql-api/subscriptions)
- **[Full Hgraph docs →](https://docs.hgraph.com/)**

## Installation & usage

To install the `@hgraph.io/sdk`, run the following command:

```bash
npm install --save-exact @hgraph.io/sdk@latest
```

This command will add the latest version of the SDK to your project's dependencies, ensuring consistent behavior across environments.

### Authenticating

To interact with Hgraph's services, you'll need to authenticate your requests. There are currently two methods for authentication:

#### Using an API key

To authenticate using an API key, include your API key in the `x-api-key header` of each request. Here's how you can set it up:

```javascript
import HgraphSDK from '@hgraph.io/sdk';

const hgraph = new HgraphSDK({
  headers: {
    'x-api-key': 'your-api-key-here',
  },
});
```

#### Using a JSON Web Token (JWT)

For enhanced security, especially in front-end applications, we are rolling out authentication using JSON Web Tokens (JWT). JWTs allow for secure transmission of authentication details without exposing sensitive information.

Learn more about JWTs at [jwt.io](https://jwt.io/).

> [!NOTE]
> Early access
> JWT authentication is in the early access phase. If you're interested in implementing this method, please [reach out to support](https://docs.hgraph.com/support) for assistance.


##### Example usage

Once you have your JWT, you can authenticate your requests as follows:

```javascript
import HgraphSDK from '@hgraph.io/sdk';

const hgraph = new HgraphSDK({
  headers: {
    Authorization: `Bearer your-jwt-token-here`,
  },
});
```
## Examples

### Overview

To help you get started quickly, we offer a collection of quick-start template repositories tailored for various development environments. These templates come pre-configured with essential settings and dependencies, allowing you to set up your project with minimal effort. By leveraging these templates, you can quickly integrate Hgraph into your project and begin building right away.

### Available Templates

Choose the template that best fits your development environment:

**[Node →](https://github.com/hgraph-io/nodejs-template)**  
Ideal for backend and server-side applications using Node.js.

**[Browser →](https://github.com/hgraph-io/browser-template)**  
Tailored for web applications running directly in the browser, enabling quick integration with Hgraph APIs.

**[Next.js →](https://github.com/hgraph-io/nextjs-template)**  
Optimized for full-stack and server-rendered applications using Next.js.

**[React →](https://github.com/hgraph-io/react-template)**  
For frontend projects using React, providing an easy setup for single-page applications.

**[React Native →](https://github.com/hgraph-io/react-native-template)**  
Suitable for mobile app development with React Native, allowing cross-platform development with Hgraph.

## Subscriptions

Our [documentation](https://docs.hgraph.com/graphql-api/subscriptions) introduces the subscription capabilities in the Hgraph SDK, enabling developers to easily set up and manage real-time data streams with GraphQL. It provides guidance on using built-in methods to track data changes and efficiently handle subscription lifecycles.

**[GraphQL Subscriptions (docs) →](https://docs.hgraph.com/graphql-api/subscriptions)** 

## Contributing

If you're interested in contributing to this repository or experimenting with the codebase, follow the steps below to set up your local development environment.

### Getting Started

#### 1. Clone the Repository

First, clone the repository to your local machine using GitHub CLI:

```bash
gh repo clone hgraph-io/sdk
```

#### 2. Initialize Git Submodules

After cloning, make sure to pull down the repository's submodules:

```bash
git submodule update --init
```

#### 3. Install Dependencies

Navigate to the cloned repository and install all necessary npm packages:

```bash
npm install
```

#### 4. Build and Watch for Changes

To automatically rebuild the project whenever you make changes, run:

```bash
npm run watch
```

This command watches for file changes and rebuilds the project accordingly.

#### 5. Use the Local SDK in Another Project

If you want to use your local version of the SDK in another project for testing or development purposes, you can set it as a local dependency:

```bash
npm install ../sdk
```

This command tells npm to use the SDK from your local file system instead of fetching it from the npm registry.

### Running Tests

The project uses Jest with TypeScript support. Execute the test suite with:

```bash
npm test
```

All `*.test.ts` files in the `tests` directory will be run.

### Debugging

To test the WebSocket connection and ensure that everything is set up correctly, you can use `wscat`, a WebSocket client for the command line.

#### Test WebSocket Connection

Replace `<YOUR_API_KEY>` with your actual API key and run:

```bash
wscat -s 'graphql-ws' -H 'x-api-key: <YOUR_API_KEY>' -c wss://testnet.hedera.api.hgraph.dev/v1/graphql
```

This command initiates a WebSocket connection to the GraphQL endpoint at `wss://testnet.hedera.api.hgraph.dev/v1/graphql` using your API key for authentication.

**Note:** If you don't have `wscat` installed, you can install it globally using:

```bash
npm install -g wscat
```

## Token Helpers (ERC-20 & ERC-721)

The SDK provides simple wrappers around standard token contracts using `ethers.js`.
See [`src/tokens/README.md`](src/tokens/README.md) for full examples and an
explanation of the difference between contract tokens and Hedera's native
tokens, including how to query native token holders via GraphQL.

## Schema

The package ships with `schema.json`, an introspection result of the Hgraph API.
You can import it directly if your client tooling needs access to the schema:

```javascript
import schema from '@hgraph.io/sdk/dist/schema.json'
```

This is useful for tasks like generating typed queries with GraphQL Codegen.

## Versioning

This Software Development Kit (SDK) is actively being developed in conjunction with the [Hgraph API](https://hgraph.com) to ensure seamless integration and compatibility between the two. We are committed to adopting [Semantic Versioning](https://semver.org) standards, which will provide clear and predictable updates, making it easier for developers to manage dependencies and stay informed about changes.

> Before we release version 1.0, updates may introduce breaking changes as we refine the software. To maintain stability in production, we recommend pinning dependencies to an exact version using `--save-exact` when installing the package.

## Continuous Integration and Dependency Updates

This project runs its test suite automatically using **GitHub Actions**. Every push and pull request triggers the workflow defined in [`.github/workflows/test.yml`](.github/workflows/test.yml), which installs dependencies with `npm ci` and executes `npm test`.

To keep dependencies current, **Dependabot** monitors `package.json` and opens weekly pull requests with updates. Review these PRs to stay on the latest compatible versions.
