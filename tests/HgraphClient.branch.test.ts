import HgraphClient from '../src/client'
import fetch from 'isomorphic-fetch'
import wsMock from './__mocks__/graphql-ws'

jest.mock('isomorphic-fetch', () => jest.fn())

const fetchMock = fetch as unknown as jest.Mock
const createClientMock = wsMock.createClient as jest.Mock

describe('HgraphClient additional branch coverage', () => {
  let originalToJSON: any

  beforeEach(() => {
    originalToJSON = (BigInt.prototype as any).toJSON
    delete (BigInt.prototype as any).toJSON
    createClientMock.mockReset()
  })

  afterEach(() => {
    if (originalToJSON === undefined) {
      delete (BigInt.prototype as any).toJSON
    } else {
      (BigInt.prototype as any).toJSON = originalToJSON
    }
  })

  it('does not patch BigInt.toJSON when disabled', () => {
    expect(() => JSON.stringify({x: 1n})).toThrow()
    new HgraphClient({patchBigIntToJSON: false, headers: {}})
    expect(() => JSON.stringify({x: 1n})).toThrow()
  })

  it('patches BigInt.toJSON and handles range checks', () => {
    new HgraphClient()
    const big = 2n ** 60n
    const neg = -(2n ** 60n)
    const small = JSON.parse(JSON.stringify({v: 42n}))
    const bigRes = JSON.parse(JSON.stringify({v: big}))
    const negRes = JSON.parse(JSON.stringify({v: neg}))
    expect(small.v).toBe(42)
    expect(bigRes.v).toBe(big.toString())
    expect(negRes.v).toBe(neg.toString())
  })

  it('throws error on non-ok responses', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      text: () => Promise.resolve(''),
    })
    const client = new HgraphClient()
    await expect(client.query({query: '{x}'})).rejects.toThrow('404 - Not Found')
  })

  it('adds authorization header and token in websocket url', () => {
    let passedUrl: string | undefined
    createClientMock.mockImplementation((opts: any) => {
      passedUrl = opts.url
      return {subscribe: jest.fn()}
    })
    const token = 'my.token'
    const client = new HgraphClient({token})
    expect(client.headers.authorization).toBe(`Bearer ${token}`)
    expect(passedUrl).toContain(encodeURIComponent(token))
  })

  it('getSubscribtions returns the same array', () => {
    createClientMock.mockReturnValue({subscribe: jest.fn(() => jest.fn())})
    const client = new HgraphClient()
    const handlers = {next: jest.fn(), error: jest.fn(), complete: jest.fn()}
    const sub = client.subscribe({query: '{x}'} , handlers)
    expect(client.getSubscribtions()).toEqual([sub])
  })

  it('cleans up subscription on error event', () => {
    let handlers: any
    const unsubscribe = jest.fn()
    createClientMock.mockReturnValue({
      subscribe: jest.fn((_, h) => { handlers = h; return unsubscribe })
    })
    const client = new HgraphClient()
    const err = jest.fn()
    const sub = client.subscribe({query: '{x}'}, {next: jest.fn(), error: err, complete: jest.fn()})
    handlers.error('oops')
    expect(err).toHaveBeenCalledWith('oops')
    expect(client.getSubscriptions()).toHaveLength(0)
    expect(() => sub.unsubscribe()).toThrow()
    expect(unsubscribe).not.toHaveBeenCalled()
  })

  it('patchedSubscribe emits non-remove patches', () => {
    let handlers: any
    createClientMock.mockReturnValue({
      subscribe: jest.fn((_, h) => { handlers = h; return jest.fn() })
    })
    const client = new HgraphClient()
    const next = jest.fn()
    client.patchedSubscribe({query: '{x}'}, {next, error: jest.fn(), complete: jest.fn()})
    handlers.next({foo: {}})
    expect(next).toHaveBeenLastCalledWith({foo: {}}, [])
    handlers.next({foo: {bar: 1}})
    expect(next).toHaveBeenLastCalledWith(
      {foo: {bar: 1}},
      [{op: 'add', path: '/foo/bar', value: 1}]
    )
  })
})
