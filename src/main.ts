import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('NodeJS Backend API')
    .setDescription('Swagger OpenAPI docs for nodejs-backend')
    .setVersion('1.0.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000, '0.0.0.0');
  console.log('��� nodejs-backend running at http://localhost:3000');
  console.log('��� Swagger docs at http://localhost:3000/docs');
}
bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});

