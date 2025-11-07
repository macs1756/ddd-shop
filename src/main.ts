/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT ?? 3000;
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  logger.log(`🚀 Server is running on http://localhost:${PORT}`);
}
bootstrap();
