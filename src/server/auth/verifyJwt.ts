import crypto from 'crypto'
import * as jose from 'jose'
//@ts-ignore
import hg, {createJwt, queries} from '@hgraph.io/sdk'

export default async function verifyJwt(jwt: string) {
  const decoded = jose.decodeJwt(jwt)
  const id = decoded.iss

  const {token} = await createJwt(
    process.env.CRYPTO_ACCOUNT_PRIVATE_KEY,
    process.env.CRYPTO_ACCOUNT_ID
  )
  console.log(token)

  const hederaPublicKey = await hg(queries.AccountPublicKey, {
    variables: {
      id,
    },
    filter: 'data.entity.public_key',
    // headers: {
      // authorization: `Bearer ${token}`,
      // authorization: `Bearer ted`,
    // },
  })
  console.log(hederaPublicKey)

  const key = Buffer.concat([
    Buffer.from('302a300506032b6570032100', 'hex'),
    Buffer.from(hederaPublicKey, 'hex'),
  ])

  const publicKey = crypto.createPublicKey({
    key,
    format: 'der',
    type: 'spki',
  })

  return await jose.jwtVerify(jwt, publicKey, {
    audience: 'https://api.hgraph.dev/v1/graphql',
    // issuer: 'test',
  })
}
