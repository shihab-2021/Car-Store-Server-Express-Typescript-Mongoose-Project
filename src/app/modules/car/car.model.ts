import { model, Schema } from 'mongoose';
import { ICar } from './car.interface';

const carSchema = new Schema<ICar>(
  {
    brand: {
      type: String,
      required: [true, 'Please provide car brand name'],
    },
    model: {
      type: String,
      required: [true, 'Please provide car model name'],
    },
    year: {
      type: Number,
      required: [true, 'Please provide year'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide car price'],
      min: [1, 'Please provide value more than 0'],
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: [true, 'Please provide a category'],
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Please provide value more than 0'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Car = model<ICar>('Car', carSchema);
