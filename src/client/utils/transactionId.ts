/*
  //construct transaction id https://docs.hgraph.io/?graphql#transaction-id
function test() {
  const json = require('./test.json')
  const {valid_start_ns, payer_account_id} = json.data.transaction[0]
  const transactionId = `0.0.${payer_account_id}-${valid_start_ns.substring(
    0,
    10
  )}-${valid_start_ns.substring(10)}`

  const restApiEndpoint = `https://mainnet-public.mirrornode.hedera.com/api/v1/transactions/${transactionId}`
  // console.log(restApiEndpoint)
}
*/

