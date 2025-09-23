import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { ScraperModule } from './scraper/scraper.module';
import { ProductDetail } from './products/entities/product-detail.entity';

@Module({
  imports: [
     ProductsModule,
       ScraperModule,
    ConfigModule.forRoot({
      isGlobal: true, // 🔹 Global ah config use pannalaam
    }),
    TypeOrmModule.forRoot(databaseConfig()),
    TypeOrmModule.forFeature([ProductDetail]), // 🔹 Entity register
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
