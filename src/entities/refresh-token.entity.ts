import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('refresh_tokens')
export class RefreshToken {
    @PrimaryColumn({ name: 'id' })
    @Generated('uuid')
    _id: string;

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ name: 'token' })
    token: string;

    @Column({ name: 'expires_at' })
    expiresAt: Date;

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}