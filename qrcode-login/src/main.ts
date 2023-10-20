import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('static', { prefix: '/pages'});//支持这个目录下静态资源的访问，用 pages 作为前缀：
  app.enableCors()//开启跨域
  await app.listen(3099);
}
bootstrap();
