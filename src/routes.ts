import { Request, Response, Router } from 'express';
import userRegister from './controllers/user/register';
import userLogin from './controllers/user/login';
import getServices from './controllers/service/get-services';

const router = Router();

router.get('/', async (req: Request, res: Response) => res.send('Hello World!'));

router.post('/v1/auth/register', userRegister);
router.post('/v1/auth/signin', userLogin);

router.get('/v1/services', getServices);

export default router;