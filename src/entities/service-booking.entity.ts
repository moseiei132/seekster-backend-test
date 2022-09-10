import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('services_bookings')
export class ServiceBooking {
    @PrimaryColumn({ name: 'id' })
    @Generated('uuid')
    _id: string;

    @Column({ name: 'service_id' })
    serviceId: string;

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}