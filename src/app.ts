import express, { Request, Response } from 'express';
import carRouter from './app/modules/car/car.route';
import orderRouter from './app/modules/order/order.route';

const app = express();

// middleware
app.use(express.json());

app.use('/api/cars', carRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  });
});

export default app;
