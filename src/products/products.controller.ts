import { Controller, Get, Param, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // ✅ Search API – FIRST
  @Get("search")
  async search(@Query("q") query: string): Promise<Product[]> {
    return this.productsService.search(query);
  }

  // எல்லா products
  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  // category அடிப்படையில்
  @Get("category/:category")
  async getByCategory(@Param("category") category: string): Promise<Product[]> {
    return this.productsService.findByCategory(category);
  }

  // ஒரு product மட்டும் (id மூலம்) – keep last
  @Get(":id")
  async getById(@Param("id") id: number): Promise<Product | null> {
    return this.productsService.findOne(id);
  }
}
