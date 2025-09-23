// src/scraper/scraper.controller.ts
import { Controller, Get, Param, InternalServerErrorException } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ProductDetail } from '../products/entities/product-detail.entity';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  // 🔹 Route: /scraper/scrape-products/:category
  @Get('scrape-products/:category')
  async scrapeProducts(
    @Param('category') category: string,
  ): Promise<ProductDetail[]> {
    try {
      // Scraper service-ஐ call பண்ணி data scrape + save பண்ணுவோம்
      const products: ProductDetail[] = await this.scraperService.scrapeAndSaveProducts(category);

      return products; // ✅ Type-safe return
    } catch (error) {
      console.error(`Error scraping products for ${category}:`, error);
      throw new InternalServerErrorException('Failed to scrape products');
    }
  }
}
