// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';  // ✅ Add this

@Module({
  imports: [TypeOrmModule.forFeature([Product])],  // ✅ Register Product repo
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService], // optional if used in other modules
})
export class ProductsModule {}
