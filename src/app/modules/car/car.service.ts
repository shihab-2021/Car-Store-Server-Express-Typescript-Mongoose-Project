import { ICar } from './car.interface';
import { Car } from './car.model';

const createCar = async (payload: ICar): Promise<ICar> => {
  const result = await Car.create(payload);

  return result;
};

const getAllCar = async (query: string | undefined): Promise<ICar[]> => {
  const result = await Car.find(
    query
      ? {
          $or: [
            { brand: { $regex: query, $options: 'i' } },
            { model: { $regex: query, $options: 'i' } },
            { category: { $regex: query, $options: 'i' } },
          ],
        }
      : {},
  );

  return result;
};

const getASpecificCar = async (carId: string): Promise<ICar | null> => {
  const result = await Car.findById(carId);

  if (result === null) {
    throw new Error('Car does not exists!');
  }

  return result;
};

const updateACar = async (id: string, data: ICar) => {
  const result = await Car.findByIdAndUpdate(id, data, {
    new: true,
  });

  return result;
};

const deleteACar = async (id: string) => {
  const result = await Car.findByIdAndDelete(id);

  return result;
};

export const carService = {
  createCar,
  getAllCar,
  getASpecificCar,
  updateACar,
  deleteACar,
};
