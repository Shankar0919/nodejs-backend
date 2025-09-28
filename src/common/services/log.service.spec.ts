import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    service = new LogService();
  });

  it('should log info message', () => {
    const spy = jest.spyOn(console, 'info').mockImplementation(() => {});
    service.info('test info');
    expect(spy).toHaveBeenCalledWith('[INFO]', 'test info');
    spy.mockRestore();
  });

  it('should log error message', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    service.error('test error');
    expect(spy).toHaveBeenCalledWith('[ERROR]', 'test error');
    spy.mockRestore();
  });

  it('should log warn message', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    service.warn('test warn');
    expect(spy).toHaveBeenCalledWith('[WARN]', 'test warn');
    spy.mockRestore();
  });

  it('should log log message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    service.log('test log');
    expect(spy).toHaveBeenCalledWith('[LOG]', 'test log');
    spy.mockRestore();
  });
});
