import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './global-filters/http-exception.filter';
// import { ConfigService } from '@nestjs/config';
import { AppExceptionFilter } from './global-filters/app-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('Retrying in NestJS')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const httpAdapterHost = app.get(HttpAdapterHost);

  // No ConfigService passed unless the filter expects it
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new AppExceptionFilter(httpAdapterHost),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
