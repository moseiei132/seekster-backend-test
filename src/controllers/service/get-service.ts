import { Request, Response } from 'express';
import { errorMessage } from '../../constants/message';
import { AppDataSource } from '../../data-source';
import { Service } from '../../entities/service.entity';

export default async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const serviceRepo = AppDataSource.getRepository(Service);
    const service = await serviceRepo.findOne({ where: { _id: serviceId } });
    if (!service) return res.status(404).send({ message: errorMessage.SERVICE_NOT_FOUND, });

    return res.send(service);
}