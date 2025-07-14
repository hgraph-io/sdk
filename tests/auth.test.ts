import {describe, it, expect, beforeEach, afterEach} from 'vitest'
import createJws from '../src/server/auth/createJws'
import verifyJws from '../src/server/auth/verifyJws'
import {publicKeyFromPrivateKey} from '../src/server/utils'

const PRIVATE_KEY_PREFIX = '302e020100300506032b657004220420'
const PUBLIC_KEY_DER_PREFIX = '302a300506032b6570032100'

function makePrivateKey(seed: Buffer) {
  return PRIVATE_KEY_PREFIX + seed.toString('hex')
}

describe('authentication helpers', () => {
  let originalCrypto: any
  beforeEach(() => {
    originalCrypto = (globalThis as any).crypto
    Object.defineProperty(globalThis, 'crypto', {
      value: undefined,
      configurable: true,
    })
  })
  afterEach(() => {
    Object.defineProperty(globalThis, 'crypto', {
      value: originalCrypto,
      configurable: true,
    })
  })

  it('creates and verifies a JWS', async () => {
    const seed = Buffer.alloc(32, 1)
    const privateKey = makePrivateKey(seed)
    const rawPublicKey = publicKeyFromPrivateKey(privateKey)
    const derPublicKey = PUBLIC_KEY_DER_PREFIX + rawPublicKey

    const jws = await createJws(privateKey, rawPublicKey, {
      issuer: '0.0.123',
      claims: {hello: 'world'},
      audience: 'hgraph',
      expirationTime: '1h',
    })

    const {payload} = await verifyJws(jws, derPublicKey)
    expect(payload.hello).toBe('world')
    expect(payload.iss).toBe('0.0.123')
  })

  it('fails verification with wrong key', async () => {
    const seed = Buffer.alloc(32, 2)
    const privateKey = makePrivateKey(seed)
    const rawPublicKey = publicKeyFromPrivateKey(privateKey)
    const jws = await createJws(privateKey, rawPublicKey, {
      issuer: '0.0.123',
      claims: {},
      audience: 'hgraph',
      expirationTime: '1h',
    })
    const wrongSeed = Buffer.alloc(32, 3)
    const wrongPublic = PUBLIC_KEY_DER_PREFIX + publicKeyFromPrivateKey(makePrivateKey(wrongSeed))
    await expect(verifyJws(jws, wrongPublic)).rejects.toThrow()
  })

  describe('browser environment', () => {
    let originalCrypto: any
    beforeEach(() => {
      originalCrypto = (globalThis as any).crypto
      Object.defineProperty(globalThis, 'crypto', {
        value: {},
        configurable: true,
      })
    })
    afterEach(() => {
      Object.defineProperty(globalThis, 'crypto', {
        value: originalCrypto,
        configurable: true,
      })
    })

    it('createJws throws', async () => {
      await expect(
        createJws('deadbeef', 'bead', {
          issuer: '0.0.1',
          claims: {},
          audience: 'hgraph',
          expirationTime: '1h',
        })
      ).rejects.toThrow('Not supported in a browser environment')
    })

    it('verifyJws throws', async () => {
      await expect(verifyJws('token', 'key')).rejects.toThrow(
        'Not supported in a browser environment'
      )
    })
  })

  it('exports helpers from index', async () => {
    const auth = await import('../src/server/auth')
    expect(auth.createJws).toBe(createJws)
    expect(auth.verifyJws).toBe(verifyJws)
  })
})
