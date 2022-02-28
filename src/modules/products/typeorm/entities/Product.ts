import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}


export default Product;
