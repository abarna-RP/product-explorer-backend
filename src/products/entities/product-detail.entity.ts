// src/products/entities/product-detail.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  source_id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  price: string;

  @Column()
  currency: string;

  @Column()
  image_url: string;

  @Column()
  source_url: string;
}
