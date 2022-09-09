import { Request, Response, Router } from 'express';
import userRegister from './controllers/user/register';
import userLogin from './controllers/user/login';

const router = Router();

router.get('/', async (req: Request, res: Response) => res.send('Hello World!'));

router.post('/v1/auth/register', userRegister);
router.post('/v1/auth/signin', userLogin);

export default router;