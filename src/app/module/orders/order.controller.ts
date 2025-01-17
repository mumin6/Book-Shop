import { Request, Response } from 'express';
import { orderService } from './order.service';
import Book from '../book/book.model';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const zodValidatedOrder = orderValidationSchema.parse(payload);
    const result = await orderService.createOrder(zodValidatedOrder);
    await Book.updateOne(
      { _id: payload.product },
      {
        $inc: { quantity: -payload.quantity },
      },
    );
    await Book.updateOne({ _id: payload.product }, [
      {
        $set: {
          inStock: {
            $cond: [{ $lte: ['$quantity', 0] }, false, true],
          },
        },
      },
    ]);
    res.json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Failed to order Book',
      success: false,
      error,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenue();

    res.json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Failed to calculate revenue',
      success: false,
      error,
    });
  }
};

export const OrderController = {
  createOrder,
  calculateRevenue,
};
