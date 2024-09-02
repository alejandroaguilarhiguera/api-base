import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const host = process.env.API_HOST || 'http://localhost';
  const port = process.env.API_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  console.log(`host ${[host, port].join(':')}`);
  await app.listen(port);
}
bootstrap();
