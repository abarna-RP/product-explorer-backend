import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🌍 Allow frontend to call backend (CORS enable)
  app.enableCors({
    origin: 'http://localhost:3000', // production-க்கு restrict பண்ணலாம் (e.g., 'http://localhost:3000')
    credentials: true,
  });

  // ✅ DTO validation globally enable
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // 🚀 Start server
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Backend running on http://localhost:${port}`);
}
bootstrap();
