import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tableNumber?: number;

  @Column()
  status: number;

  @Column({ type: 'json' })
  products: JSON;

  @OneToMany(
    type => Client,
    client => client.order,
  )
  client?: Client;
}
