/*
 * These are utilities to patch the troubles with rounding large integers from json in javascript
 */
const {parse} = require('json-bigint')({
  useNativeBigInt: true,
})

//@ts-ignore
BigInt.prototype.toJSON = function () {
  if (Number.MIN_SAFE_INTEGER < this && this < Number.MAX_SAFE_INTEGER) return Number(this)
  else return this.toString()
}
//TODO: is this working in a browser?
JSON.parse = (text) => parse(text)
// might have to use something like
// const newFetch = async (...args) => {
//  const response = await window.fetch(...args)
//  const json = parse(await response.text())

//  response.json = async () => json

//  return response
// }
