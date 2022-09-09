import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entity/user.entity';
import { ILogin } from '../../type/interface/user.interface';
import * as bcrypt from 'bcrypt';

export default async (req: Request, res: Response) => {
    const { username, password }: ILogin = req.body;

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { username } });
    if (!user) return res.status(401).send({ message: 'Username or password is incorrect' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send({ message: 'Username or password is incorrect' });

    return res.send({
        message: 'User logged in successfully',
    });
}