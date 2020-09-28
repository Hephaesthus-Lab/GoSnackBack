import { ClientMiddleware } from '../middlewares/client-exists.middleware';

describe('ClientMiddleware', () => {
  it('should be defined', () => {
    expect(new ClientMiddleware()).toBeDefined();
  });
});
