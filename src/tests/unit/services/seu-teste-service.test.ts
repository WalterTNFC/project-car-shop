import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarService';
import { carMock, carMockWithId } from '../../mocks/cars';
const { expect } = chai;

describe('Cars Service', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);

  afterEach(async () => {
    sinon.restore();
  });

  describe('Creating a car', () => {

    before(async () => {
      sinon.stub(carsModel, 'create').resolves(carMockWithId);
    });

    it('Succesfully created', async () => {
      const createdCar = await carsService.create(carMock);
      expect(createdCar).to.be.deep.equal({
        code: 201,
        data: carMockWithId,
      });
    });

    it('Semantic error', async () => {
      try {
        await carsService.create({ ...carMock, model: '' });
      } catch (error: any) {
        expect(error.message).to.be.equal('Should be at least 3 characters');
      }
    });

  });

});