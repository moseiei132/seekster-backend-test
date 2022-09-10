import { Entity, Column, Generated, PrimaryColumn } from "typeorm"

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
}
