import { ZodError } from 'zod';
import { TGenericErrorResponse, TErrorSources } from '../interfaces/error.interface';

const zodErrorHandler = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue) => {
    const lastPath = issue.path[issue.path.length - 1];

    // Convert symbol to string if needed
    const path = typeof lastPath === 'symbol' ? lastPath.toString() : lastPath;

    return {
      path,
      message: issue.message,
    };
  });

  return {
    status: 400,
    message: 'Validation Error',
    errorSources,
  };
};

export default zodErrorHandler;
