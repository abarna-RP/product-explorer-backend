import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike } from "typeorm";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: ["category", "reviews"],
    });
  }

  async findByCategory(category: string): Promise<Product[]> {
    return this.productRepository.find({
      where: { category: { name: category } },
      relations: ["category", "reviews"],
    });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({
      where: { id },
      relations: ["category", "reviews"],
    });
  }

  // 🔍 Search products by title or author
  async searchProducts(query: string): Promise<Product[]> {
    return this.productRepository.find({
      where: [
        { title: ILike(`%${query}%`) },
        { author: ILike(`%${query}%`) },
      ],
      relations: ["category", "reviews"],
    });
  }
}
