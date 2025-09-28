import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

@Injectable()
export class LogService implements NestLoggerService {
  log(message: any, ...optionalParams: any[]) {
    console.log('[LOG]', message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error('[ERROR]', message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn('[WARN]', message, ...optionalParams);
  }

  info(message: any, ...optionalParams: any[]) {
    console.info('[INFO]', message, ...optionalParams);
  }
}
