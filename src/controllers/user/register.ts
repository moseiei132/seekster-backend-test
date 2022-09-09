import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { IUser } from '../../types/interfaces/user.interface';
import { User } from '../../entities/user.entity';
import { AppDataSource } from '../../data-source';

export default async (req: Request, res: Response) => {
    const { fullName, username, password }: IUser = req.body;

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { username } });
    if (user) return res.status(400).send({
        message: 'Username already exists',
    });

    const hashedPassword: string = await bcrypt.hash(password, 10);
    await userRepo.save({
        fullName,
        username,
        password: hashedPassword,
    });

    res.send({
        message: 'User registered successfully',
    });
}