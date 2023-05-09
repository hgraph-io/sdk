import JSONBigInt from 'json-bigint'

export const {parse, stringify} = JSONBigInt({
  useNativeBigInt: true,
})

export function patchBigIntToJSON() {
  BigInt.prototype['toJSON'] = function () {
    if (Number.MIN_SAFE_INTEGER < this && this < Number.MAX_SAFE_INTEGER)
      return Number(this)
    else return this.toString()
  }
}
