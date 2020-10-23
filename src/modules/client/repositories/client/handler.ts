import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Client } from 'src/entities/client.entity';
import { ClientRepo } from './repository';

@Injectable()
export class ClientRepositoryHandler {
  constructor(private readonly clientRepository: ClientRepo) {}

  async insert(client: Client): Promise<Client> {
    try {
      client.id = null;
      const result = await this.clientRepository.insert(client);
      client.id = result.identifiers[0].id;
      return client;
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar salvar o cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByName(name: string): Promise<Client[]> {
    try {
      return await this.clientRepository.findByName(name);
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar encontrar o cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByTelephone(telephone: string): Promise<Client[]> {
    try {
      return await this.clientRepository.findByTelephone(telephone);
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar encontrar o cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByAddress(address: string): Promise<Client[]> {
    try {
      return await this.clientRepository.findByAddress(address);
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar encontrar cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findById(id: string): Promise<Client> {
    try {
      return await this.clientRepository.findById(id);
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar encontrar cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async find(): Promise<Client[]> {
    try {
      return await this.clientRepository.findAll();
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar cadastrar cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(client: Client): Promise<Client> {
    try {
      const clientToUpdate = await this.clientRepository.findById(client.id);
      clientToUpdate.address = client.address;
      clientToUpdate.name = client.name;
      clientToUpdate.telephone = client.telephone;
      return await this.clientRepository.update(clientToUpdate);
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar atualizar cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const result = await this.clientRepository.delete(id);
      if (result.affected) return true;
      return false;
    } catch (e) {
      throw new HttpException(
        'Erro ao tentar deletar o cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async throwExceptionIfClientIdNotExists(id: string): Promise<any> {
    const result = await this.clientRepository.findById(id);
    if (!result)
      throw new HttpException('Esse cliente não existe', HttpStatus.NOT_FOUND);
  }

  async throwExceptionIfClientIdExists(id: string): Promise<any> {
    const result = await this.clientRepository.findById(id);
    if (result)
      throw new HttpException('Esse cliente já existe', HttpStatus.BAD_REQUEST);
  }

  async throwExceptionIfClientTelephoneExists(telephone: string): Promise<any> {
    const result = await this.clientRepository.findByTelephone(telephone);
    if (result.length > 0)
      throw new HttpException(
        'Esse telefone já existe',
        HttpStatus.BAD_REQUEST,
      );
  }
}
