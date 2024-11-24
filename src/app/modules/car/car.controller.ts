import { Request, Response } from 'express';
import { carService } from './car.service';
import carValidationSchema from './car.validation';

const createCar = async (req: Request, res: Response) => {
  try {
    const validatedData = carValidationSchema.parse(req.body);
    const result = await carService.createCar(validatedData);

    res.json({
      success: true,
      message: 'Car created successfully',
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

const getAllCar = async (req: Request, res: Response) => {
  try {
    const query = req.query.searchTerm as string | undefined;

    const result = await carService.getAllCar(query);

    res.json({
      status: true,
      message: 'Cars retrieved successfully',
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

const getASpecificCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;

    const result = await carService.getASpecificCar(carId);

    res.json({
      status: true,
      message: 'Car retrieved successfully',
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

const updateACar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const body = req.body;

    const result = await carService.updateACar(carId, body);

    if (result === null) {
      res.status(404).json({
        success: false,
        message: `No car with the car id: ${carId}!`,
      });
    } else {
      res.json({
        status: true,
        message: 'Car updated successfully',
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

const deleteACar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;

    const result = await carService.deleteACar(carId);

    if (result === null) {
      res.status(404).json({
        success: false,
        message: `No car with the car id: ${carId}!`,
      });
    } else {
      res.json({
        status: true,
        message: 'Car deleted successfully',
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

export const carController = {
  createCar,
  getAllCar,
  getASpecificCar,
  updateACar,
  deleteACar,
};
