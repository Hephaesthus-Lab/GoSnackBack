import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: true })
  tableNumber?: number;

  @Column({ default: 0 })
  status: number;

  @Column()
  total: number;

  @Column()
  change: number;

  @Column({ nullable: false, type: 'longtext' })
  products: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  isDelivery: boolean;

  @ManyToOne(
    type => Client,
    client => client.order,
  )
  client?: Client;
}
