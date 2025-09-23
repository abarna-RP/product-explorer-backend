import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./product.entity";

@Entity("reviews")
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column({ type: "int", default: 0 })
  rating: number;

  @ManyToOne(() => Product, (product) => product.reviews)
  product: Product;
}
