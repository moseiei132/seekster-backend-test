import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('refresh_tokens')
export class RefreshToken {
    @PrimaryGeneratedColumn({ name: 'id' })
    _id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'token' })
    token: string;

    @Column({ name: 'expires_at' })
    expiresAt: Date;

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}