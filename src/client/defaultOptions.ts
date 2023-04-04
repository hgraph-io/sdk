import {Network} from '../types'

/*
 * headers or client specific options
 */
export default {
  endpoint: 'https://api.hgraph.dev/v1/graphql', //TODO: change to production endpoint
  headers: {
    'content-type': 'application/json',
    'x-hgraph-network': Network.HederaMainnet,
    // 'x-hgraph-network': Network.HederaTestnet,
  },
}
