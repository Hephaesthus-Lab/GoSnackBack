import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class ClientRepo {
  constructor(
    @InjectRepository(Client) private readonly db: Repository<Client>,
  ) {}

  async insert(client: Client): Promise<InsertResult> {
    return await this.db.insert(client);
  }

  async findByName(name: string): Promise<Client[]> {
    return await this.db.find({
      where: {
        name: name,
      },
    });
  }

  async findByTelephone(telephone: string): Promise<Client[]> {
    return await this.db.find({
      telephone: telephone,
    });
  }

  async findByAddress(address: string): Promise<Client[]> {
    return await this.db.find({
      where: { address: address },
    });
  }

  async findById(id: string): Promise<Client> {
    return await this.db.findOne(id);
  }

  async findAll(): Promise<Client[]> {
    return await this.db.find();
  }

  async update(client: Client): Promise<Client> {
    return await this.db.save(client);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.db.delete(id);
  }
}
