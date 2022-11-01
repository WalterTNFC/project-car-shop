import { Router } from 'express';
import CarsController from '../controllers/carsController';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarService';

const cars = Router();
const carsModel = new CarsModel();
const carsService = new CarsService(carsModel);
const carsController = new CarsController(carsService);

cars.post('/', carsController.create);
cars.get('/', carsController.read);

export default cars;