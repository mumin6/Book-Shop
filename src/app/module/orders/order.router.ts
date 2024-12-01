import { Router } from 'express';
import { OrderController } from './order.controller';

const orderRouter = Router();

orderRouter.get('/revenue', OrderController.calculateRevenue);
orderRouter.post('/', OrderController.createOrder);

export default orderRouter;
