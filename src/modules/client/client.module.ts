import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientRepo } from './repositories/client/repository';
import { ClientRepositoryHandler } from './repositories/client/handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';

@Module({
  providers: [ClientService, ClientRepo, ClientRepositoryHandler],
  controllers: [ClientController],
  imports: [TypeOrmModule.forFeature([Client])],
})
export class ClientModule {}
