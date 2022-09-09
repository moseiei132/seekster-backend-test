import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { IUser } from '../../type/interface/user.interface';
import { User } from '../../entity/user.entity';
import { AppDataSource } from '../../data-source';

export default async (req: Request, res: Response) => {
    const { fullName, username, password }: IUser = req.body;

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { username } });
    if (user) {
        return res.status(400).send({
            message: 'Username already exists',
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRepo.save({
        fullName,
        username,
        password: hashedPassword,
    });

    res.send({
        message: 'User registered successfully',
    });
}