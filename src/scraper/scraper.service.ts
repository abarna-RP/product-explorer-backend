import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDetail } from '../products/entities/product-detail.entity';
import { CreateProductDto } from '../products/dto/create-product.dto';

@Injectable()
export class ScraperService {
  private readonly logger = new Logger(ScraperService.name);

  constructor(
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
  ) {}

  async scrapeAndSaveProducts(productId: string): Promise<ProductDetail[]> {
    try {
      const createDto: CreateProductDto = {
        source_id: productId,
        title: 'Test Book',
        author: 'John Doe',
        price: '500',
        currency: '£',
        image_url: 'https://example.com/image.jpg',
        source_url: 'https://example.com/product/' + productId,
      };

      const productDetail = this.productDetailRepository.create(createDto);
      await this.productDetailRepository.save(productDetail);

      const savedProducts: ProductDetail[] = [];
      savedProducts.push(productDetail);

      this.logger.log(`Product ${productId} saved successfully`);
      return savedProducts;
    } catch (error) {
      this.logger.error('Error while saving product', error.stack);
      throw new InternalServerErrorException('Failed to save product');
    }
  }
}
