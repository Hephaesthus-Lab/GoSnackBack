import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post('insert')
  async insert(@Body() product: Product): Promise<Product> {
    return await this.service.insert(product);
  }

  @Get('find')
  async findAll(): Promise<Product[]> {
    return await this.service.findAll();
  }

  @Get('find/:id')
  async findOneById(@Param('id') id: string): Promise<Product> {
    return await this.service.findById(id);
  }

  @Get('findByName')
  async findOneByName(@Query('name') name: string): Promise<Product[]> {
    return await this.service.findByName(name);
  }

  @Get('findByPrice')
  async findOneByPrice(@Query('price') price: number): Promise<Product[]> {
    return await this.findOneByPrice(price);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.service.delete(id);
  }

  @Put('update')
  async update(@Body() product: Product): Promise<Product> {
    return await this.service.update(product);
  }
}
