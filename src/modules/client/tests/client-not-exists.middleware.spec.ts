import { ClientNotExistsMiddleware } from '../middlewares/client-not-exists.middleware';

describe('ClientNotExistsMiddleware', () => {
  it('should be defined', () => {
    expect(new ClientNotExistsMiddleware()).toBeDefined();
  });
});
