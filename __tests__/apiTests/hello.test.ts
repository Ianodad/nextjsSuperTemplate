import handler from '@pages/api/hello';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';

describe('/api/hello', () => {
  test('returns a message with the specified name', async () => {
    const { req: NextApiRequest, res: NextApiResponse } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'John Doe',
      }),
    );
  });
});
