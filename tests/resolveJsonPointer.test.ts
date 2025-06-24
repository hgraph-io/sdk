import {describe, it, expect} from 'vitest'
import {resolveJsonPointer} from '../src/client/utils'

describe('resolveJsonPointer', () => {
  const obj = {a: {b: {c: 1}}, 'x/y': {'~z': 2}}

  it('resolves standard pointers', () => {
    expect(resolveJsonPointer(obj, '/a/b/c')).toBe(1)
  })

  it('returns object for intermediate token', () => {
    expect(resolveJsonPointer(obj, '/a/b')).toEqual({c: 1})
  })

  it('handles escaped tokens', () => {
    expect(resolveJsonPointer(obj, '/x~1y/~0z')).toBe(2)
  })
})
