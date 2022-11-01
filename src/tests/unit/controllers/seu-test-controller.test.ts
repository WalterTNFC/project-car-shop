// template para criação dos testes de cobertura da camada de controller


// import * as sinon from 'sinon';
// import chai from 'chai';
// const { expect } = chai;

// describe('Sua descrição', () => {

//   before(async () => {
//     sinon
//       .stub()
//       .resolves();
//   });

//   after(()=>{
//     sinon.restore();
//   })

//   it('', async () => {});

// });
import * as sinon from 'sinon';
import chai from 'chai';
import { NextFunction, Request, Response } from 'express';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarService';
import CarsController from '../../../controllers/carsController';
import { carMock, carMockWithId } from '../../mocks/cars';
const { expect } = chai;

describe('Cars Controller', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);

  const serverError = Error('Server error.');

  const req = {} as Request;
  const res = {} as Response;
  let next = new Function

  after(async () => {
    sinon.restore();
  });

  describe('Creating a car', () => {
    before(async () => {
      sinon.stub(carsService, 'create')
      .onCall(0).resolves({
        code: 201,
        data: carMockWithId,
      })
      .onCall(1).throws(serverError)

      req.body = carMock;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      next = sinon.stub();
    });

    it('Successfully created', async () => {
      await carsController.create(req, res, next as NextFunction);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });

    it('Server error', async () => {
      await carsController.create(req, res, next as NextFunction);
      expect((next as sinon.SinonStub).calledWith(serverError)).to.be.true;
    });

  });

});