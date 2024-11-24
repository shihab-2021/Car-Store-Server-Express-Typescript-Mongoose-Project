import { Car } from '../car/car.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const orderACar = async (payload: IOrder) => {
  // checking if car exists
  const carResult = await Car.findById(payload.car);
  if (!carResult) {
    throw new Error('Car does not exists!');
  }
  // checking if car in stock
  if (carResult.inStock === false) {
    throw new Error('Car out of stock!');
  }
  // checking if the price given perfectly
  if (carResult.price * payload.quantity !== payload.totalPrice) {
    throw new Error('Price is not correct!');
  }

  const order = await Order.create(payload);

  await Car.findByIdAndUpdate(payload.car, {
    $inc: { quantity: -payload.quantity },
    $set: {
      inStock: carResult.quantity - payload.quantity > 0,
    },
  });

  return order;
};

const revenueFromOrders = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return { totalRevenue: result[0]?.totalRevenue };
};

export const orderService = { orderACar, revenueFromOrders };
