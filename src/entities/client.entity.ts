import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  telephone: string;

  @Column({ nullable: false })
  address: string;

  @Column({ default: 'Ponto de referencia não informado' })
  referencePoint: string;

  @OneToMany(
    type => Order,
    order => order.client,
  )
  order: Order;
}
