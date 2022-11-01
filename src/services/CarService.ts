import { ICar, zodCar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';
// import { zodVehicleSchema } from '../interfaces/IVehicle';
import validateBody from '../helpers/validateCar';
import { zodVehicle } from '../interfaces/IVehicle';
// import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _carModel:IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._carModel = model;
  }

  public async create(obj: ICar) {
    validateBody(obj, zodCar, zodVehicle);
    const createdCar = await this._carModel.create(obj);
    return { code: 201, data: createdCar };
  }

  public async read() {
    const cars = await this._carModel.read();
    return { code: 200, data: cars };
  }
}

export default CarService;