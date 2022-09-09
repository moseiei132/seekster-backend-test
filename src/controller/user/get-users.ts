import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entity/user.entity';

const getUsers = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    res.send(users)
};

export default getUsers;