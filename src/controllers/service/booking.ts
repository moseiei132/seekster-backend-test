import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { ServiceBooking } from '../../entities/service-booking.entity';
import { Service } from '../../entities/service.entity';

export default async (req: Request, res: Response) => {
    const { userId }: { userId: string } = req.body;
    const { serviceId } = req.params;

    const serviceRepo = AppDataSource.getRepository(Service);
    const bookingRepo = AppDataSource.getRepository(ServiceBooking);

    const service = await serviceRepo.findOne({ where: { _id: serviceId } });
    if (!service) return res.status(404).send({ message: 'Service not found' });

    const booking = await bookingRepo.save({
        serviceId,
        userId,
    });

    return res.send({
        message: 'Service booked successfully',
        booking,
    });
};