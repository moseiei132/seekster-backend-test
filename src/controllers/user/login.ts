import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { ILogin } from '../../types/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import generateToken from '../../utils/generate-token';
import { errorMessage, successMessage } from '../../constants/message';

export default async (req: Request, res: Response) => {
    const { username, password }: ILogin = req.body;

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { username } });
    if (!user) return res.status(401).send({ message: errorMessage.LOGIN_FAILED, });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send({ message: errorMessage.LOGIN_FAILED, });

    const accessToken = await generateToken(user._id);

    return res.send({
        message: successMessage.LOGIN_SUCCESS,
        accessToken,
    });
}