import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const zodCar = z.object({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export type ICar = z.infer<typeof zodCar> & IVehicle;