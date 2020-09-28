import { Injectable } from '@nestjs/common';
import { Client } from 'src/entities/client.entity';
import { ClientRepositoryHandler } from './repositories/client/handler';

@Injectable()
export class ClientService {
  constructor(
    private readonly clientRepositoryHandler: ClientRepositoryHandler,
  ) {}

  async insert(client: Client): Promise<Client> {
    await this.clientRepositoryHandler.throwExceptionIfClientTelephoneExists(
      client.telephone,
    );
    return await this.clientRepositoryHandler.insert(client);
  }

  async find(): Promise<Client[]> {
    return await this.clientRepositoryHandler.find();
  }

  async findOneById(id: string): Promise<Client> {
    await this.clientRepositoryHandler.throwExceptionIfClientIdNotExists(id);
    return await this.clientRepositoryHandler.findById(id);
  }

  async findByName(name: string): Promise<Client[]> {
    return await this.clientRepositoryHandler.findByName(name);
  }

  async findByAddress(address: string): Promise<Client[]> {
    return await this.clientRepositoryHandler.findByAddress(address);
  }

  async findByTelephone(telephone: string): Promise<Client[]> {
    return await this.clientRepositoryHandler.findByTelephone(telephone);
  }

  async update(client: Client): Promise<Client> {
    await this.clientRepositoryHandler.throwExceptionIfClientIdNotExists(
      client.id,
    );
    return await this.clientRepositoryHandler.update(client);
  }

  async delete(id: string): Promise<boolean> {
    return await this.clientRepositoryHandler.delete(id);
  }
}
