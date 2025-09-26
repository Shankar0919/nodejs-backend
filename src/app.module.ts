import { Module } from '@nestjs/common';
import { ApiController } from './api/controller/api.controller';
import { ApiService } from './api/service/api.service';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
