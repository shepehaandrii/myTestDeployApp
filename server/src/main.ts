import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: ['http://ec2-16-170-211-55.eu-north-1.compute.amazonaws.com', 'http://localhost:3001'], // або ваш домен фронта
  credentials: true, // якщо потрібні куки/авторизація
});

  app.setGlobalPrefix('api'); // Set a global prefix for all routes

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
