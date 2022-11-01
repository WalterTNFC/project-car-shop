import { Schema, model as mongooseCreateModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carSchema = new Schema<ICar>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  doorsQty: {
    type: Number,
    required: true,
  },
  seatsQty: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
});

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarsModel;