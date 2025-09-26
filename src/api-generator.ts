import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import yaml from 'yaml';

export async function generateSpec() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('NodeJS Backend API')
    .setDescription('Swagger OpenAPI documentation for nodejs-backend')
    .setVersion('1.0.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const yamlSpec = yaml.stringify(document);

  const outputPath = resolve(process.cwd(), 'collections/api-spec.yaml');
  writeFileSync(outputPath, yamlSpec);

  console.log(`✅ OpenAPI spec written to ${outputPath}`);
  process.exit(0);
}

// keep auto-run for CLI usage
if (require.main === module) {
  generateSpec().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
