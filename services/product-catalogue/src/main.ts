import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (errors) => {
      const errorsForResponse = errors.map(error => ({
        property: error.property,
        constraints: error.constraints,
      }));
      return new BadRequestException(errorsForResponse);
    },
  }));
  await app.listen(3000);
}
bootstrap();
