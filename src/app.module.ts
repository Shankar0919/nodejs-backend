import { Module } from '@nestjs/common';

import { UsersController } from './users/controller/users.controller';
import { UsersService } from './users/service/users.service';

// Common services
import { LogService } from './common/services/log.service';
import { HealthController } from './health/health.controller';
// import { HttpExceptionService } from './common/services/http-exception.service';

// Interceptors
// import { HttpInterceptor } from './common/interceptors/http.interceptor';

@Module({
  imports: [],
  controllers: [UsersController, HealthController],
  providers: [
    UsersService,

    LogService,
    // HttpExceptionService,

    // Global interceptor (applies everywhere in the app)
    // {
      // provide: APP_INTERCEPTOR,
      // useClass: HttpInterceptor,
    // },

  ],
  exports: [
    // Export reusable services/validators so other modules can inject them
    LogService,
    // HttpExceptionService,
  ],
})
export class AppModule {}
