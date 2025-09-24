import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { Product } from "./entities/product.entity";
import { Category } from "./entities/category.entity";
import { Review } from "./entities/review.entity";
import { ProductDetail } from "./entities/product-detail.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Category,       // 👈 Add this
      Review,
      ProductDetail,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
