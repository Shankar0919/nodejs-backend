import { LogService } from "./log.service";

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    service = new LogService();
  });

  it('should log info message', () => {
    const spy = jest.spyOn(service as any, 'logger');
    service.info('test info');
    expect(spy).toBeDefined();
  });

  it('should log error message', () => {
    const spy = jest.spyOn(service as any, 'logger');
    service.error('test error');
    expect(spy).toBeDefined();
  });
});
