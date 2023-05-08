import JSONBigInt from 'json-bigint'

export const {parse, stringify} = JSONBigInt({
  useNativeBigInt: true,
})
