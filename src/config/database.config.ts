import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductDetail } from '../products/entities/product-detail.entity';
import { Category } from 'src/products/entities/category.entity';
import { Review } from 'src/products/entities/review.entity';
import { Product } from 'src/products/entities/product.entity';

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres', 
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'mysecretpassword',
  database: process.env.DB_NAME || 'product_explorer_db'
,
  entities: [Product, ProductDetail, Category, Review],
  synchronize: true, // 🔹 dev purpose only (auto create tables)
});
