import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepo } from './repositories/product/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { ProductRepositoryHandler } from './repositories/product/handler';

@Module({
  providers: [ProductService, ProductRepo, ProductRepositoryHandler],
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product])],
  exports: [ProductService, ProductRepo, ProductRepositoryHandler],
})
export class ProductModule {}
