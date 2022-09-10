import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { IUser } from '../../types/interfaces/user.interface';
import { User } from '../../entities/user.entity';
import { AppDataSource } from '../../data-source';
import generateToken from '../../utils/generate-token';
import { errorMessage, successMessage } from '../../constants/message';

export default async (req: Request, res: Response) => {
    const { fullName, username, password }: IUser = req.body;

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { username } });
    if (user) return res.status(400).send({
        message: errorMessage.USERNAME_ALREADY_EXISTS,
    });

    const hashedPassword: string = await bcrypt.hash(password, 10);
    const createdUser = await userRepo.save({
        fullName,
        username,
        password: hashedPassword,
    });

    const accessToken = await generateToken(createdUser._id);

    return res.send({
        message: successMessage.USER_REGISTERED,
        accessToken,
    });
}