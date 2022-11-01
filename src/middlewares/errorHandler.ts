import { NextFunction, Request, Response } from 'express';
import CustomError from '../interfaces/IError';

const errorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(err.message);
  if (!err.statusCode) {
    return res.status(400).json({
      message: 'Server error.',
    });
  }
  const { message, statusCode } = err;
  return res.status(statusCode).json({ message });
};

export default errorHandler;