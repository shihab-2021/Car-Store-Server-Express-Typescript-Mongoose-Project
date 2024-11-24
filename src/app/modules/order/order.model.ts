import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Please provide email!'],
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Please provide value more than 0'],
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>('Order', orderSchema);
