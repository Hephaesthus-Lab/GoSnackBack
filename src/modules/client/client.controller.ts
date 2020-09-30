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
import { Client } from 'src/entities/client.entity';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('insert')
  async insert(@Body() client: Client): Promise<Client> {
    return await this.clientService.insert(client);
  }

  @Get('findOne/:id')
  async findById(@Param('id') id: string): Promise<Client> {
    return await this.clientService.findOneById(id);
  }

  @Get('find')
  async findAll(): Promise<Client[]> {
    return await this.clientService.find();
  }

  @Get('findByName')
  async findByName(@Query('name') name: string): Promise<Client[]> {
    return await this.clientService.findByName(name);
  }

  @Get('findByTelephone')
  async findByTelephone(
    @Query('telephone') telephone: string,
  ): Promise<Client[]> {
    return await this.clientService.findByTelephone(telephone);
  }

  @Get('findByAddress')
  async findByAddress(@Query('address') address: string): Promise<Client[]> {
    return await this.clientService.findByAddress(address);
  }

  @Put('update')
  async update(@Body() client: Client): Promise<Client> {
    return await this.clientService.update(client);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.clientService.delete(id);
  }
}
