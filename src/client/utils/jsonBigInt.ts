import {default as isomorphicFetch} from 'isomorphic-fetch'

/*
 * These are utilities to patch the troubles with rounding large integers from json in javascript
 */
const {parse} = require('json-bigint')({
  useNativeBigInt: true,
})

//@ts-ignore
BigInt.prototype.toJSON = function () {
  if (Number.MIN_SAFE_INTEGER < this && this < Number.MAX_SAFE_INTEGER)
    return Number(this)
  else return this.toString()
}

// JSON.parse = (text) => parse(text)

export async function fetch(...args) {
  const response = await isomorphicFetch(...args)
  const _json = parse(await response.text())
  response.json = async function json() {
    return _json
  }
  return response
}
