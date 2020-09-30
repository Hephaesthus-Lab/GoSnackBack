import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Order } from 'src/entities/order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('insert')
  async insert(@Body() order: Order): Promise<Order> {
    return await this.orderService.insert(order);
  }

  @Get('find')
  async findAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return await this.orderService.findOne(id);
  }

  @Put('update')
  async update(@Body() order: Order): Promise<Order> {
    return await this.orderService.update(order);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.orderService.delete(id);
  }
}
