import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/env';
import { errorMessage } from '../constants/message';
import { AppDataSource } from '../data-source';
import { RefreshToken } from '../entities/refresh-token.entity';
import { IJWTPayload } from '../types/interfaces/common.interface';

export default async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send({ message: errorMessage.ACCESS_TOKEN_INVALID, });

    try {
        const decoded = verify(token, JWT_SECRET_KEY) as IJWTPayload;
        const { userId, refreshToken } = decoded;

        const refreshTokenRepo = AppDataSource.getRepository(RefreshToken);
        const refreshTokenData = await refreshTokenRepo.findOne({ where: { userId, token: refreshToken } });
        if (!refreshTokenData) return res.status(401).send({ message: errorMessage.ACCESS_TOKEN_INVALID, });
        if (refreshTokenData.expiresAt < new Date()) return res.status(401).send({ message: errorMessage.ACCESS_TOKEN_EXPIRED, });

        refreshTokenRepo.update({ _id: refreshTokenData._id }, { expiresAt: new Date(Date.now() + 1000 * 60 * 60) });

        req.body.userId = userId;
        next();
    }
    catch (err) {
        return res.status(403).send({ message: errorMessage.ACCESS_TOKEN_INVALID, });
    }
};