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

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}