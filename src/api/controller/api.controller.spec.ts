import { ApiController } from './api.controller';
import { ApiService } from '../service/api.service';

describe('ApiController', () => {
  let controller: ApiController;
  let service: ApiService;

  beforeEach(() => {
    service = new ApiService();
    controller = new ApiController(service);
  });

  it('should return Hello World from service', () => {
    expect(controller.getResponse()).toEqual({
      message: 'Hello World',
      statusCode: 200,
    });
  });

  it('should return data by ID from service', () => {
    expect(controller.getById('456')).toEqual({
      message: 'Data for ID: 456',
      statusCode: 200,
    });
  });

  it('should return a user object from service', () => {
    expect(controller.getUser()).toEqual({
      username: 'JohnDoe',
      role: 'admin',
      statusCode: 200,
    });
  });
});
