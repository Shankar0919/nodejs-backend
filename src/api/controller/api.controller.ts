import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { ApiService } from '../service/api.service';

@ApiTags('API')
@Controller('api')
export class ApiController {
  constructor(private readonly service: ApiService) {}

  @Get()
  @ApiHeader({ name: 'x-request-id', description: 'Request ID header' })
  getResponse() {
    return this.service.getResponse();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Get('user')
  @ApiTags('User')
  getUser() {
    return this.service.getUser();
  }
}
