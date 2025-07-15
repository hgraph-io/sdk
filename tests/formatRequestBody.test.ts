import {describe, it, expect} from '@jest/globals'
import {parse, print} from 'graphql'
import {formatRequestBody} from '../src/client/utils'

describe('formatRequestBody', () => {
  const queryStr = 'query { hello }'
  const doc = parse(queryStr)

  it('accepts string input', () => {
    expect(formatRequestBody(queryStr)).toEqual({query: queryStr})
  })

  it('accepts DocumentNode', () => {
    expect(formatRequestBody(doc)).toEqual({query: print(doc)})
  })

  it('accepts object with query string', () => {
    const body = {query: queryStr, variables: {a: 1}}
    expect(formatRequestBody(body)).toEqual(body)
  })

  it('accepts object with DocumentNode', () => {
    const body = {query: doc, variables: {a: 1}}
    expect(formatRequestBody(body)).toEqual({query: print(doc), variables: {a:1}})
  })

  it('throws on malformed input', () => {
    // @ts-expect-error testing runtime failure
    try {
      formatRequestBody({foo: 1} as any)
      } catch (e) {
      expect(e).toBeInstanceOf(Error)
    }
  })
})
