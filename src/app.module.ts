import { Module } from '@nestjs/common';
import { ApiController } from './api/controller/api.controller';
import { ApiService } from './api/service/api.service';
import { LogService } from './common/services/log.service';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  exports: [LogService],
})
export class AppModule {}
