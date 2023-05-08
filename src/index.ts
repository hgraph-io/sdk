BigInt.prototype['toJSON'] = function () {
  if (Number.MIN_SAFE_INTEGER < this && this < Number.MAX_SAFE_INTEGER)
    return Number(this)
  else return this.toString()
}

import client from './client'

export * as lib from './graphql'
export default client
