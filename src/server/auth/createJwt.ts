import nacl from 'tweetnacl'
import asn from 'asn1.js'
import crypto from 'node:crypto'
import * as jose from 'jose'

//TODO: support other types of key
//https://github.com/hashgraph/hedera-sdk-js/blob/e0cd39c84ab189d59a6bcedcf16e4102d7bb8beb/packages/cryptography/src/Ed25519PrivateKey.js

/*
 * create KeyObject
 *  - https://github.com/panva/paseto/issues/8#issuecomment-633647614
 *  - https://github.com/panva/jose/blob/main/docs/types/types.KeyLike.md
 *  - https://nodejs.org/api/crypto.html#class-keyobject
 */

//https://github.com/hashgraph/hedera-sdk-js/blob/develop/packages/cryptography/src/Ed25519PrivateKey.js
//https://github.com/hashgraph/hedera-sdk-js/blob/develop/packages/cryptography/src/Ed25519PublicKey.js
// const PUBLIC_KEY_DER_PREFIX = '302a300506032b6570032100'
function createPrivateKey(cryptoAccountPrivateKey: string) {
  // asn
  const OneAsymmetricKey = asn.define('OneAsymmetricKey', function () {
    this.seq().obj(
      this.key('version').int(),
      this.key('algorithm').use(
        asn.define('AlgorithmIdentifier', function () {
          this.seq().obj(this.key('algorithm').objid())
        })
      ),
      this.key('privateKey').use(
        asn.define('PrivateKey', function () {
          this.octstr().contains().obj(this.key('privateKey').octstr())
        })
      )
    )
  })

  //https://github.com/hashgraph/hedera-sdk-js/blob/e0cd39c84ab189d59a6bcedcf16e4102d7bb8beb/packages/cryptography/src/Ed25519PrivateKey.js#L108
  const keyPair = nacl.sign.keyPair.fromSeed(
    Buffer.from(cryptoAccountPrivateKey, 'hex').subarray(16)
  )

  const output = OneAsymmetricKey.encode(
    {
      version: 0,
      privateKey: {privateKey: Buffer.from(keyPair.secretKey.slice(0, 32))},
      algorithm: {algorithm: '1.3.101.112'.split('.')},
    },
    'der'
  )
  output.write('04', 12, 1, 'hex')

  return crypto.createPrivateKey({
    key: output,
    format: 'der',
    type: 'pkcs8',
  })
}

export default async function createJwt(
  cryptoAccountPrivateKey: string,
  options: {
    audience: string
    expirationTime: string
    issuer: string
  }
) {
  const keyLike = createPrivateKey(cryptoAccountPrivateKey)

  return {
    token: await new jose.SignJWT({'urn:example:claim': true})
      .setProtectedHeader({alg: 'EdDSA'})
      .setIssuedAt()
      // .setIssuer(`https://hgraph.me`)
      .setIssuer(options.issuer)
      .setAudience(options.audience)
      .setExpirationTime(options.expirationTime)
      .sign(keyLike),
  }
}
