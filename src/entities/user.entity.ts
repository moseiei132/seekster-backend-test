import { Entity, Column, Generated, PrimaryColumn, OneToMany } from "typeorm"
import { ServiceBooking } from './service-booking.entity'

@Entity('users')
export class User {
    @PrimaryColumn({ name: 'id' })
    @Generated('uuid')
    _id: string

    @Column({ name: 'full_name' })
    fullName: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(() => ServiceBooking, (booking) => booking.customer)
    bookings?: ServiceBooking[]
}
