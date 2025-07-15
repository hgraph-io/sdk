import {describe, it, expect} from 'vitest'
import schema from '../src/schema'
import schemaJson from '../schema.json'

describe('schema module', () => {
  it('exports the introspection JSON', () => {
    expect(schema).toEqual(schemaJson)
  })
})
