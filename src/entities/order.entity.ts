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

  @Column({ nullable: false, type: 'longtext' })
  products: string;

  @OneToMany(
    type => Client,
    client => client.order,
  )
  client?: Client;
}
