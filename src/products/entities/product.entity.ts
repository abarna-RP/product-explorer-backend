import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Category } from "./category.entity";
import { Review } from "./review.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  sourceId: string;

  @Column()
  sourceUrl: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ type: "numeric", default: 0 })
  price: number;

  @Column()
  currency: string;

  @Column()
  imageUrl: string;

  @Column({ type: "timestamp", nullable: true })
  lastScrapedAt: Date;

  // Category relation
  @ManyToOne(() => Category, (category) => category.products, {
    eager: true,
    nullable: true,
  })
  category: Category;

  // Reviews relation
  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}
