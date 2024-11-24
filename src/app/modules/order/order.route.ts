import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

orderRouter.post('/', orderController.orderACar);
orderRouter.get('/revenue', orderController.revenueFromOrders);

export default orderRouter;
