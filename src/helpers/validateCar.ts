import { z } from 'zod';
import CustomError from '../interfaces/IError';

const validateBody = (
  obj: any, 
  schema: z.ZodObject<any>,
  mainSchema: z.ZodObject<any>,
): void => {
  const zodSchemas = mainSchema.merge(schema);
  const parsedObj = zodSchemas.safeParse(obj);
  let errorMessage;

  if (!parsedObj.success) {
    errorMessage = parsedObj.error.issues[0].message;
    throw new CustomError(
      errorMessage,
      400,
    );
  }
};

export default validateBody;