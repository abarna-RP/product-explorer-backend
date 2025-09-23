// src/data-source.ts

import { DataSource } from 'typeorm';
import { Product } from './products/entities/product.entity';
import { ProductDetail } from './products/entities/product-detail.entity';
import { Review } from './products/entities/review.entity';


console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_USERNAME:', process.env.DB_USERNAME);

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10), // This is the fixed line
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'mysecretpassword',
  database: process.env.DB_DATABASE || 'product_explorer_db',
  entities: [
    'dist/**/*.entity.js'
  ],
  migrations: [
    'dist/migration/**/*.js'
  ],
  synchronize: false,
  logging: true,
});