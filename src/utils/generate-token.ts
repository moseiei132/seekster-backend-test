import { JWT_SECRET_KEY } from '../config/env';
import { sign } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { AppDataSource } from '../data-source';
import { RefreshToken } from '../entities/refresh-token.entity';
import { IJWTPayload } from '../types/interfaces/common.interface';

export default async (userId: string) => {
    const refreshToken = uuidv4();
    const jwtPayload: IJWTPayload = { userId, refreshToken };
    const token = sign(jwtPayload, JWT_SECRET_KEY);

    const refreshTokenRepo = AppDataSource.getRepository(RefreshToken);
    await refreshTokenRepo.save({
        userId,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
    });

    return token;
}