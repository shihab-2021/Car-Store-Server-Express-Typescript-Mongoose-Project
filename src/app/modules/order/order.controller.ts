import { Request, Response } from 'express';
import { orderService } from './order.service';
import orderValidationSchema from './order.validation';
import { Types } from 'mongoose';

const orderACar = async (req: Request, res: Response) => {
  try {
    const validatedData = orderValidationSchema.parse(req.body);
    if (validatedData) {
      const carId = new Types.ObjectId(validatedData.car);
      const orderData = { ...validatedData, car: carId };
      const result = await orderService.orderACar(orderData);

      res.json({
        success: true,
        message: 'Order created successfully',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
      stack: error.stack || '',
    });
  }
};

const revenueFromOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.revenueFromOrders();

    res.json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
      stack: error.stack || '',
    });
  }
};

export const orderController = {
  orderACar,
  revenueFromOrders,
};
