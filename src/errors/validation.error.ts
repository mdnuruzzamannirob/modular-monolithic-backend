import { CastError, Error } from "mongoose";
import {
  TGenericErrorResponse,
  TErrorSources,
} from "../interfaces/error.interface";

const validationErrorHandler = (
  err: Error.ValidationError
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: Error.ValidatorError | CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );

  return {
    status: 400,
    message: "Validation Error",
    errorSources,
  };
};

export default validationErrorHandler;
