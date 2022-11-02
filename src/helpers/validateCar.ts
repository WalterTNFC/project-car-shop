import { z } from 'zod';
import CustomError from '../interfaces/IError';

const validateBody = (
  obj: unknown, 
  schema: z.ZodObject<z.ZodRawShape>,
  mainSchema: z.ZodObject<z.ZodRawShape>,
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