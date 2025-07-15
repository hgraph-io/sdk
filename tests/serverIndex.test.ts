import {describe, it, expect, jest} from '@jest/globals'

const ERROR_MESSAGE =
  'It appears this is being run in a browser environment and is unsafe. Do not expose private keys on a front end!'

describe('server index entry', () => {
  it('does not throw in a node environment', () => {
    jest.isolateModules(() => {
      delete (global as any).window
      expect(() => require('../src/server')).not.toThrow()
      const mod = require('../src/server')
      expect(typeof mod.default).toBe('function')
    })
  })

  it('throws when a window object is present', () => {
    jest.isolateModules(() => {
      ;(global as any).window = {}
      expect(() => require('../src/server')).toThrow(ERROR_MESSAGE)
      delete (global as any).window
    })
  })
})
