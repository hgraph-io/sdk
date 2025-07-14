import HgraphClient from '../src/client'
import {Network, Environment} from '../src/types'
import fetch from 'isomorphic-fetch'
import wsMock from './__mocks__/graphql-ws'

jest.mock('isomorphic-fetch', () => jest.fn());

const fetchMock = fetch as unknown as jest.Mock;

describe('HgraphClient.query', () => {
  it('posts request and parses response', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      text: () => Promise.resolve(JSON.stringify({ data: { hello: 'world' } }))
    });

    const client = new HgraphClient({ network: Network.HederaTestnet, environment: Environment.Development, headers: {} });
    const result = await client.query({ query: '{ hello }' });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe(client.endpoint);
    expect(result).toEqual({ data: { hello: 'world' } });
  });
});

describe('HgraphClient subscriptions', () => {
  const createClientMock = wsMock.createClient as jest.Mock

  beforeEach(() => {
    createClientMock.mockReset()
  })

  it('adds and removes a subscription', () => {
    const unsubscribe = jest.fn()
    createClientMock.mockReturnValue({
      subscribe: jest.fn(() => unsubscribe),
    })

    const client = new HgraphClient({network: Network.HederaTestnet, environment: Environment.Development, headers: {}})
    const handlers = {next: jest.fn(), error: jest.fn(), complete: jest.fn()}
    const sub = client.subscribe({query: '{test}'}, handlers)

    expect(client.getSubscriptions()).toHaveLength(1)
    client.removeSubscription(sub)
    expect(unsubscribe).toHaveBeenCalled()
    expect(client.getSubscriptions()).toHaveLength(0)
  })

  it('patchedSubscribe emits patches and cleans up on complete', () => {
    let passedHandlers: any
    const unsubscribe = jest.fn()
    createClientMock.mockReturnValue({
      subscribe: jest.fn((_, h) => {
        passedHandlers = h
        return unsubscribe
      }),
    })

    const client = new HgraphClient()
    const next = jest.fn()
    const sub = client.patchedSubscribe({query: '{x}'} , {next, error: jest.fn(), complete: jest.fn()})

    passedHandlers.next({foo: {bar: 1}})
    expect(next).toHaveBeenLastCalledWith({foo: {bar: 1}}, [])

    passedHandlers.next({foo: {}})
    expect(next).toHaveBeenLastCalledWith(
      {foo: {}},
      [{op: 'remove', path: '/foo/bar', value: 1}]
    )

    passedHandlers.complete()
    expect(client.getSubscriptions()).toHaveLength(0)
    expect(() => sub.unsubscribe()).toThrow()
  })

  it('removeAllSubscriptions unsubscribes all', () => {
    const unsubscribe1 = jest.fn()
    const unsubscribe2 = jest.fn()
    createClientMock.mockReturnValue({
      subscribe: jest
        .fn()
        .mockReturnValueOnce(unsubscribe1)
        .mockReturnValueOnce(unsubscribe2),
    })

    const client = new HgraphClient()
    const handlers = {next: jest.fn(), error: jest.fn(), complete: jest.fn()}
    const sub1 = client.subscribe({query: '{a}'}, handlers)
    const sub2 = client.subscribe({query: '{b}'}, handlers)

    expect(client.getSubscriptions()).toHaveLength(2)
    client.removeAllSubscriptions()
    expect(unsubscribe1).toHaveBeenCalled()
    expect(unsubscribe2).toHaveBeenCalled()
    expect(client.getSubscriptions()).toHaveLength(0)
    expect(() => sub1.unsubscribe()).toThrow()
    expect(() => sub2.unsubscribe()).toThrow()
  })
})
