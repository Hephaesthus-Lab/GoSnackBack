import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { OrderRepo } from './repositories/order/repository';
import { OrderRepositoryHandler } from './repositories/order/handler';

@Module({
  providers: [OrderService, OrderRepo, OrderRepositoryHandler],
  controllers: [OrderController],
  imports: [TypeOrmModule.forFeature([Order])],
})
export class OrderModule {}
