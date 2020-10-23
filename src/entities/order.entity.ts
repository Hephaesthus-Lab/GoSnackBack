import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client.entity';
import { Product } from './product.entity';

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

  @Column()
  createdAt: Date;

  @ManyToOne(
    type => Client,
    client => client.order,
  )
  client?: Client;
}
