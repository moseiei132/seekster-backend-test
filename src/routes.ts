import { Request, Response, Router } from 'express';
import getUsers from './controller/user/get-users';

const router = Router();

router.get('/', async (req: Request, res: Response) => res.send('Hello World!'));

router.get('/users', getUsers);

export default router;