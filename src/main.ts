// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './global-filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from './common/gaurds/auth.guard';
import { RolesGuard } from './common/gaurds/role.guard';

declare const module: {
  hot?: { accept: () => void; dispose: (cb: () => void) => void };
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('Retrying in NestJS')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  const reflector = app.get(Reflector);
  const jwtService = app.get(JwtService);
  app.useGlobalGuards(
    new AuthGuard(jwtService, reflector),
    new RolesGuard(reflector),
  );
  app.enableCors({
    origin: [
      "http://localhost:3000",
      "http://127.0.1:3000",
    ], 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 5100);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => void app.close());
  }
}
bootstrap();
