import { Module } from '@nestjs/common';
import { ApiController } from './api/controller/api.controller';
import { UsersController } from './users/controller/users.controller';
import { UsersService } from './users/service/users.service';

@Module({
  controllers: [ApiController, UsersController],
  providers: [UsersService],
})
export class AppModule { }
