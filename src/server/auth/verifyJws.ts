import * as jose from 'jose'

// const PUBLIC_KEY_DER_PREFIX = '302a300506032b6570032100'

export default async function verifyJws(
  jws: string,
  cryptoAccountPublicKey: string
) {
  if (globalThis.crypto)
    throw new Error('Not supported in a browser environment')

  const crypto = await import('node:crypto');
  const publicKey = crypto.createPublicKey({
    key: Buffer.from(cryptoAccountPublicKey, 'hex'),
    format: 'der',
    type: 'spki',
  })

  return await jose.jwtVerify(jws, publicKey)
}
