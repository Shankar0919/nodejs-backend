import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('healthcheck')
@Controller()
export class ApiController {
  @Get('healthcheck')
  @ApiOperation({ summary: 'Check API health' })
  @ApiResponse({ status: 200, description: 'Service is healthy' })
  healthcheck() {
    return { status: 'ok' };
  }
}
