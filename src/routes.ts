import { Request, Response, Router } from 'express';
import userRegister from './controllers/user/register';
import userLogin from './controllers/user/login';
import getServices from './controllers/service/get-services';
import getService from './controllers/service/get-service';
import authenticateToken from './middlewares/authenticate-token';
import booking from './controllers/service/booking';
import getOrders from './controllers/service/get-orders';
import { loginValidator, registerValidator } from './validators/user.validator';
import { executeValidator } from './validators/execute-validator';

const router = Router();

router.get('/', async (req: Request, res: Response) => res.send('Hello World!'));

router.post('/v1/auth/register', executeValidator(registerValidator), userRegister);
router.post('/v1/auth/signin', executeValidator(loginValidator), userLogin);

router.get('/v1/services', getServices);
router.get('/v1/services/:serviceId', getService);
router.post('/v1/services/:serviceId/booking', authenticateToken, booking);

router.get('/v1/orders', authenticateToken, getOrders);

export default router;