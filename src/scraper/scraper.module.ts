import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScraperService } from './scraper.service';
import { ScraperController } from './scraper.controller';
import { ProductDetail } from '../products/entities/product-detail.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProductDetail])],
  controllers: [ScraperController],
  providers: [ScraperService],
    exports: [ScraperService],
})
export class ScraperModule {}