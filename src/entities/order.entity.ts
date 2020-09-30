import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './client.entity';
import { Product } from './product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  createdAt: string;

  @ManyToOne(
    type => Client,
    client => client.order,
  )
  client?: Client;
}
