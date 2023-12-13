import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors();

  // GLOBAL PREFIX
  app.setGlobalPrefix('app/v1');

  // SERVER
  const SERVER_PORT = process.env.SERVER_PORT;

  await app.listen(SERVER_PORT);
  logger.log(`SERVER RUNNING IN PORT ${SERVER_PORT}`);
}
bootstrap();
