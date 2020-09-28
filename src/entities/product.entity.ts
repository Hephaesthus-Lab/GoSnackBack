import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ default: 'Sem descrição' })
  description: string;
}
