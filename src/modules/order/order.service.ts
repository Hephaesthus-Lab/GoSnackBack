import { Injectable } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';
import { OrderRepositoryHandler } from './repositories/order/handler';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepositoryHandler: OrderRepositoryHandler,
  ) {}

  async insert(order: Order): Promise<Order> {
    return await this.orderRepositoryHandler.insert(order);
  }

  async findAll(): Promise<Order[]> {
    return await this.orderRepositoryHandler.findAll();
  }

  async findOne(id: string): Promise<Order> {
    await this.orderRepositoryHandler.throwExceptionIfOrderNotExists(id);
    return await this.orderRepositoryHandler.findOne(id);
  }

  async update(order: Order): Promise<Order> {
    await this.orderRepositoryHandler.throwExceptionIfOrderNotExists(order.id);
    return await this.orderRepositoryHandler.update(order);
  }

  async delete(id: string): Promise<boolean> {
    await this.orderRepositoryHandler.throwExceptionIfOrderNotExists(id);
    return await this.orderRepositoryHandler.delete(id);
  }
}
