import { Column, Entity, Generated, OneToMany, PrimaryColumn } from 'typeorm';
import { ServiceBooking } from './service-booking.entity';

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

    @OneToMany(() => ServiceBooking, (booking) => booking.service)
    bookings?: ServiceBooking[];
}