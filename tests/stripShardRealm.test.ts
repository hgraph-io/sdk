import {describe, it, expect} from '@jest/globals'
import {stripShardRealm} from '../src/utils'

describe('stripShardRealm', () => {
  it('removes shard and realm', () => {
    expect(stripShardRealm('0.0.12345')).toBe(12345)
  })

  it('works with extra segments', () => {
    expect(stripShardRealm('0.0.1.2')).toBe(1)
  })
})
