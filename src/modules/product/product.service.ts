import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductRepositoryHandler } from './repositories/product/handler';

@Injectable()
export class ProductService {
  constructor(private readonly productHandler: ProductRepositoryHandler) {}

  async insert(product: Product): Promise<Product> {
    await this.productHandler.throwExceptionIfProductNameExists(product.name);
    return await this.productHandler.insert(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productHandler.findAll();
  }

  async findById(id: string): Promise<Product> {
    await this.productHandler.throwExceptionIfProductIdNotExists(id);
    return await this.productHandler.findById(id);
  }

  async findByName(name: string): Promise<Product[]> {
    return await this.productHandler.findByName(name);
  }

  async findByPrice(price: number): Promise<Product[]> {
    return await this.productHandler.findByPrice(price);
  }

  async update(product: Product): Promise<Product> {
    await this.productHandler.throwExceptionIfProductIdNotExists(product.id);
    return await this.productHandler.update(product);
  }

  async delete(id: string): Promise<boolean> {
    await this.productHandler.throwExceptionIfProductIdNotExists(id);
    return await this.productHandler.delete(id);
  }
}
