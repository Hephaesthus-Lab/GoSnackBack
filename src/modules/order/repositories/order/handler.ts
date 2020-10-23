import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';
import { OrderRepo } from './repository';

@Injectable()
export class OrderRepositoryHandler {
  constructor(private readonly orderRepository: OrderRepo) {}

  async insert(order: Order): Promise<Order> {
    try {
      order.id = null;
      return await this.orderRepository.insert(order);
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Algo deu errado ao tentar inserir esse pedido',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<Order[]> {
    try {
      return await this.orderRepository.findAll();
    } catch (e) {
      throw new HttpException(
        'Algo deu errado ao tentar recuperar os pedidos',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string): Promise<Order> {
    try {
      return await this.orderRepository.findOne(id);
    } catch (e) {
      throw new HttpException(
        'Algo deu errado ao tentar encontrar esse pedido',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(order: Order): Promise<Order> {
    try {
      const orderToUpdate = await this.orderRepository.findOne(order.id);
      orderToUpdate.status = order.status;
      orderToUpdate.products = order.products;
      orderToUpdate.tableNumber = order.tableNumber;
      orderToUpdate.change = order.change;
      orderToUpdate.total = order.total;
      return await this.orderRepository.update(orderToUpdate);
    } catch (e) {
      throw new HttpException(
        'Algo deu errado ao tentar atualizar esse pedido',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const result = await this.orderRepository.delete(id);
      if (result.affected) return true;
      return false;
    } catch (e) {
      throw new HttpException(
        'Algo deu errado ao tentar deletar esse pedido',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async throwExceptionIfOrderNotExists(id: string): Promise<void> {
    const result = await this.orderRepository.findOne(id);
    if (!result)
      throw new HttpException(
        'Esse pedido não está mais no sistema',
        HttpStatus.BAD_REQUEST,
      );
  }
}
