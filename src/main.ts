import { NestFactory } from '@nestjs/core';
import { Root } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(Root);
  await app.listen(3000);
}
bootstrap();
