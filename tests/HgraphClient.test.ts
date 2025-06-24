import HgraphClient from '../src/client';
import { Network, Environment } from '../src/types';
import fetch from 'isomorphic-fetch';

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
