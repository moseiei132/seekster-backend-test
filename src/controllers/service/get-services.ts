import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Service } from '../../entities/service.entity';

export default async (req: Request, res: Response) => {
    const serviceRepo = AppDataSource.getRepository(Service)
    const services = await serviceRepo.find();

    return res.send(services);
};