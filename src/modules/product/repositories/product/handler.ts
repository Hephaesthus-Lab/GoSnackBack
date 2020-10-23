import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductRepo } from './repository';

@Injectable()
export class ProductRepositoryHandler {
  constructor(private readonly repository: ProductRepo) {}

  async insert(product: Product): Promise<Product> {
    try {
      product.id = null;
      const result = await this.repository.insert(product);
      product.id = result.identifiers[0].id;
      return product;
    } catch (e) {
      throw new HttpException(
        'Ocorreu um erro ao tentar salvar esse produto',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const result = await this.repository.findAll();
      return result;
    } catch (e) {
      throw new HttpException(
        'Ocorreu um erro ao tentar encontrar esse produto',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findById(id: string): Promise<Product> {
    try {
      const result = await this.repository.findById(id);
      return result;
    } catch (e) {
      throw new HttpException(
        'Ocorreu um erro ao tentar encontrar esse produto',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByName(name: string): Promise<Product[]> {
    try {
      const result = await this.repository.findByName(name);
      return result;
    } catch (e) {
      throw new HttpException(
        'Ocorreu um erro ao tentar encontrar esse produto',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByPrice(price: number): Promise<Product[]> {
    try {
      const result = await this.repository.findByPrice(price);
      return result;
    } catch (e) {
      throw new HttpException(
        'Ocorreu um erro ao tentar encontrar esse produto',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(product: Product): Promise<Product> {
    try {
      const productToUpdate = await this.repository.findById(product.id);
      productToUpdate.name = product.name;
      productToUpdate.price = product.price;
      productToUpdate.description = product.description;
      const result = await this.repository.update(productToUpdate);
      return result;
    } catch (e) {
      throw new HttpException(
        'Ocorreu um erro ao tentar atualizar esse produto',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const result = await this.repository.delete(id);
      if (result.affected) return true;
      return false;
    } catch (e) {
      throw new HttpException(
        'Ocorreu um erro ao tentar deletar esse produto',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async throwExceptionIfProductIdNotExists(id: string): Promise<void> {
    const result = await this.repository.findById(id);
    if (!result)
      throw new HttpException(
        'Esse produto não existe',
        HttpStatus.BAD_REQUEST,
      );
  }

  async throwExceptionIfProductNameExists(name: string): Promise<void> {
    const result = await this.findByName(name);
    if (result.length > 0)
      throw new HttpException(
        'Um produto com esse nome já está cadastrado',
        HttpStatus.BAD_REQUEST,
      );
  }
}
