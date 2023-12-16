import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import * as dotenv from 'dotenv';
async function bootstrap() {
  //dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  console.log(process.env.NODE_ENV)
  await app.listen(3000);
}
bootstrap();
