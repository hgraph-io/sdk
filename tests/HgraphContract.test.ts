import { HgraphContract } from '../src/contract';
const mockClient: any = {
  query: jest.fn()
};

const abi = ['event MyEvent(uint256 value)'];

const contract = new HgraphContract({ contractId: '0.0.123', abi, client: mockClient });

describe('HgraphContract.queryEvents', () => {
  it('decodes events from query results', async () => {
    const iface = contract.contract.interface;
    const fragment = iface.getEvent('MyEvent');
    const encoded = iface.encodeEventLog(fragment, [42n]);

    (mockClient.query as jest.Mock).mockResolvedValue({
      data: {
        logs: [
          {
            data: encoded.data,
            topic0: encoded.topics[0],
            topic1: encoded.topics[1] ?? null,
            topic2: encoded.topics[2] ?? null,
            topic3: encoded.topics[3] ?? null
          }
        ]
      }
    });

    const events = await contract.queryEvents();
    expect(events).toHaveLength(1);
    expect(events[0].name).toBe('MyEvent');
    expect(events[0].args?.value.toString()).toBe('42');
    expect(mockClient.query).toHaveBeenCalled();
  });

  it('throws the first graphql error if present', async () => {
    const error = new Error('bad request');
    (mockClient.query as jest.Mock).mockResolvedValue({
      data: {logs: []},
      errors: [error]
    });

    await expect(contract.queryEvents()).rejects.toThrow(error);
    expect(mockClient.query).toHaveBeenCalled();
  });

  it('ignores logs without data', async () => {
    (mockClient.query as jest.Mock).mockResolvedValue({
      data: {logs: [{data: null}]}
    });
    const spy = jest.spyOn(contract.contract.interface, 'parseLog');

    const events = await contract.queryEvents();
    expect(events).toEqual([]);
    expect(spy).not.toHaveBeenCalled();
  });

  it('skips events when parseLog returns undefined', async () => {
    const iface = contract.contract.interface;
    const fragment = iface.getEvent('MyEvent');
    const encoded = iface.encodeEventLog(fragment, [1n]);

    (mockClient.query as jest.Mock).mockResolvedValue({
      data: {
        logs: [
          {
            data: encoded.data,
            topic0: encoded.topics[0],
            topic1: encoded.topics[1] ?? null,
            topic2: encoded.topics[2] ?? null,
            topic3: encoded.topics[3] ?? null
          }
        ]
      }
    });

    jest
      .spyOn(contract.contract.interface, 'parseLog')
      .mockReturnValue(undefined as any);

    const events = await contract.queryEvents();
    expect(events).toEqual([]);
  });
});
