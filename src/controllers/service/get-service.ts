import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Service } from '../../entities/service.entity';

export default async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const serviceRepo = AppDataSource.getRepository(Service);
    const service = await serviceRepo.findOne({ where: { _id: serviceId } });
    if (!service) return res.status(404).send({ message: 'Service not found' });

    return res.send(service);
}