import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { stringify } from 'yaml';

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

  const collectionsDir = resolve(process.cwd(), 'collections');
  mkdirSync(collectionsDir, { recursive: true });

  // Truth file for Swagger + Bruno
  const yamlPath = resolve(collectionsDir, 'api-spec.yaml');
  writeFileSync(yamlPath, stringify(document));

  // JSON file for Postman
  const postmanPath = resolve(collectionsDir, 'postman_collection.json');
  writeFileSync(postmanPath, JSON.stringify(document, null, 2));

  console.log(`✅ OpenAPI specs generated: - ${yamlPath}  (Swagger/Bruno) - ${postmanPath}  (Postman)`);

  await app.close();
  process.exit(0);
}

if (require.main === module) {
  generateSpec().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
