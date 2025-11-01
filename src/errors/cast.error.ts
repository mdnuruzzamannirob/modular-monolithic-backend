import { CastError } from 'mongoose';
import { TGenericErrorResponse, TErrorSources } from '../interfaces/error.interface';

const castErrorHandler = (err: CastError): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    status: 400,
    message: 'Invalid ID',
    errorSources,
  };
};

export default castErrorHandler;
