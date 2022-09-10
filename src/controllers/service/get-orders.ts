import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { ServiceBooking } from '../../entities/service-booking.entity';

export default async (req: Request, res: Response) => {
    const { userId }: { userId: string } = req.body;

    const bookingRepo = AppDataSource.getRepository(ServiceBooking);
    const bookings = await bookingRepo.find({
        where: { userId },
        relations: ['service', 'customer'],
    });

    bookings.forEach((booking) => {
        delete booking.customer.password;
        delete booking.userId;
        delete booking.serviceId;
    });

    return res.send(bookings);
};