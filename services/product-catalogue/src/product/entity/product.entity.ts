import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'product-catalogue' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;
}
