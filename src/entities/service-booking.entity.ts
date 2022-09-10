import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Service } from './service.entity';
import { User } from './user.entity';

@Entity('services_bookings')
export class ServiceBooking {
    @PrimaryColumn({ name: 'id' })
    @Generated('uuid')
    _id: string;

    @Column({ name: 'service_id' })
    serviceId: string;

    @Column({ name: 'user_id' })
    userId: string;

    @ManyToOne(() => Service, (service) => service.bookings)
    @JoinColumn({ name: 'service_id' })
    service?: Service;

    @ManyToOne(() => User, (user) => user.bookings)
    @JoinColumn({ name: 'user_id' })
    customer?: User;

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}