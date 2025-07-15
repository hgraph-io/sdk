import {describe, it, expect} from '@jest/globals'
import {publicKeyFromPrivateKey} from '../src/server/utils'
import nacl from 'tweetnacl'

const PRIVATE_KEY_PREFIX = '302e020100300506032b657004220420'

describe('publicKeyFromPrivateKey', () => {
  it('derives the correct public key from a private key hex string', () => {
    const seed = Buffer.alloc(32, 1)
    const privateKey = PRIVATE_KEY_PREFIX + seed.toString('hex')
    const expected = Buffer.from(nacl.sign.keyPair.fromSeed(seed).publicKey).toString('hex')
    expect(publicKeyFromPrivateKey(privateKey)).toBe(expected)
  })

  it('works with different seeds', () => {
    const seed = Buffer.alloc(32, 2)
    const privateKey = PRIVATE_KEY_PREFIX + seed.toString('hex')
    const expected = Buffer.from(nacl.sign.keyPair.fromSeed(seed).publicKey).toString('hex')
    expect(publicKeyFromPrivateKey(privateKey)).toBe(expected)
  })
})

describe('server utils index', () => {
  it('re-exports publicKeyFromPrivateKey', async () => {
    const utils = await import('../src/server/utils')
    expect(utils.publicKeyFromPrivateKey).toBe(publicKeyFromPrivateKey)
  })
})
