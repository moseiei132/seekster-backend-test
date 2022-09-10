import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('services')
export class Service {
    @PrimaryColumn({ name: 'id' })
    @Generated('uuid')
    _id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    picture: string;

    @Column()
    description: string;
}