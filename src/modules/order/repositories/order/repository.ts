import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class OrderRepo {
  constructor(
    @InjectRepository(Order) private readonly db: Repository<Order>,
  ) {}

  async insert(order: Order): Promise<Order> {
    return await this.db.save(order);
  }

  async findAll(): Promise<Order[]> {
    return await this.db.find({
      join: {
        alias: 'order',
        leftJoinAndSelect: {
          client: 'order.client',
        },
      },
    });
  }

  async findOne(id: string): Promise<Order> {
    return await this.db.findOne({
      where: { id: id },
      join: {
        alias: 'order',
        leftJoinAndSelect: {
          client: 'order.client',
        },
      },
    });
  }

  async update(order: Order): Promise<Order> {
    return await this.db.save(order);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.db.delete(id);
  }
}
