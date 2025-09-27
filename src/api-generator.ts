import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { stringify } from 'yaml';
import { FastifyAdapter } from '@nestjs/platform-fastify'; // ✅ use fastify

async function generateSpec() {
  // ✅ explicitly use Fastify instead of default Express
  const app = await NestFactory.create(AppModule, new FastifyAdapter(), { logger: false });

  const config = new DocumentBuilder()
    .setTitle('Node JS Backend API')
    .setDescription('API for managing users and healthcheck')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const yamlSpec = stringify(document);
  writeFileSync('openapi.yaml', yamlSpec, { encoding: 'utf8' });

  await app.close();

  console.log('✅ OpenAPI spec written to openapi.yaml');
}

generateSpec();
