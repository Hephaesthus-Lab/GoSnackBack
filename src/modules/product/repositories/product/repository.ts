import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class ProductRepo {
  constructor(
    @InjectRepository(Product) private readonly db: Repository<Product>,
  ) {}

  async insert(product: Product): Promise<InsertResult> {
    return await this.db.insert(product);
  }

  async findById(id: string): Promise<Product> {
    return await this.db.findOne(id);
  }

  async findByName(name: string): Promise<Product[]> {
    return await this.db.find({
      where: { name: name },
    });
  }

  async findByPrice(price: number): Promise<Product[]> {
    return await this.db.find({
      where: { price: price },
    });
  }

  async findAll(): Promise<Product[]> {
    return await this.db.find();
  }

  async update(product: Product): Promise<Product> {
    return await this.db.save(product);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.db.delete(id);
  }
}
