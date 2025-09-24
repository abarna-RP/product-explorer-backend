import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { Category } from "./entities/category.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // ✅ எல்லா products
  async findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: ["category", "reviews"],
    });
  }

  // ✅ Category filter
  async findByCategory(category: string): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.category", "category")
      .leftJoinAndSelect("product.reviews", "reviews")
      .where("category.name = :category", { category })
      .getMany();
  }

  // ✅ Search (title or author)
  async search(query: string): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.category", "category")
      .leftJoinAndSelect("product.reviews", "reviews")
      .where("product.title ILIKE :query OR product.author ILIKE :query", {
        query: `%${query}%`,
      })
      .getMany();
  }

  // ✅ ஒரு product மட்டும் (id மூலம்)
  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({
      where: { id },
      relations: ["category", "reviews"],
    });
  }
}
