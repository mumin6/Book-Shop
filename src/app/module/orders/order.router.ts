import { Router } from "express";
import { OrderControler } from "./order.controller";

const orderRouter = Router();

orderRouter.get('/revenue', OrderControler.calculateRevenue);
orderRouter.post('/', OrderControler.createOrder);

export default orderRouter;