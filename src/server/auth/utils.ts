import nacl from 'tweetnacl'

export function getPublicKeyFromPrivateKey(cryptoAccountPrivateKey: string) {
  const keyPair = nacl.sign.keyPair.fromSeed(
    Buffer.from(cryptoAccountPrivateKey, 'hex').subarray(16)
  )
  // stored in database without DER prefix
  return Buffer.from(keyPair.publicKey).toString('hex')
}
