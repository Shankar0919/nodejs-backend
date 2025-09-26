import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    service = new ApiService();
  });

  it('should return Hello World', () => {
    expect(service.getResponse()).toEqual({
      message: 'Hello World',
      statusCode: 200,
    });
  });

  it('should return data by ID', () => {
    expect(service.getById('123')).toEqual({
      message: 'Data for ID: 123',
      statusCode: 200,
    });
  });

  it('should return a user object', () => {
    expect(service.getUser()).toEqual({
      username: 'JohnDoe',
      role: 'admin',
      statusCode: 200,
    });
  });
});
