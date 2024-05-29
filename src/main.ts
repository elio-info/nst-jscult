import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  //configurando tiutlos de documentacion
  let opciones=new DocumentBuilder()
    .setTitle('Esta es la documentacion')
    .setDescription(' esta es la API de prueba')
    .setVersion('0.1')
    .build()
  let documentSwgg= SwaggerModule.createDocument(app,opciones)
    SwaggerModule.setup('docs',app,documentSwgg)
  //fin configurando tiutlos de documentacion
  await app.listen(3000);
}
bootstrap();
