import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { Error as MongooseError } from "mongoose";
import { TErrorSources } from "../interfaces/error.interface";
import AppError from "../errors/app.error";
import castErrorHandler from "../errors/cast.error";
import {
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  BadRequestError,
  ConflictError,
  RateLimitError,
  ServiceUnavailableError,
  TimeoutError,
} from "../errors/custom.error";
import duplicateErrorHandler from "../errors/duplicate.error";
import validationErrorHandler from "../errors/validation.error";
import zodErrorHandler from "../errors/zod.error";
import { ENV } from "../config/env.config";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let status = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [{ path: "", message: message }];

  // Zod
  if (error instanceof ZodError) {
    const simplified = zodErrorHandler(error);
    status = simplified.status;
    message = simplified.message;
    errorSources = simplified.errorSources;
  }
  // Mongoose Validation
  else if (error instanceof MongooseError.ValidationError) {
    const simplified = validationErrorHandler(error);
    status = simplified.status;
    message = simplified.message;
    errorSources = simplified.errorSources;
  }
  // Mongoose CastError
  else if (error instanceof MongooseError.CastError) {
    const simplified = castErrorHandler(error);
    status = simplified.status;
    message = simplified.message;
    errorSources = simplified.errorSources;
  }
  // Duplicate key
  else if (error?.code === 11000) {
    const simplified = duplicateErrorHandler(error);
    status = simplified.status;
    message = simplified.message;
    errorSources = simplified.errorSources;
  }
  // AppError & extended errors
  else if (
    error instanceof AppError ||
    error instanceof NotFoundError ||
    error instanceof UnauthorizedError ||
    error instanceof ForbiddenError ||
    error instanceof BadRequestError ||
    error instanceof ConflictError ||
    error instanceof RateLimitError ||
    error instanceof ServiceUnavailableError ||
    error instanceof TimeoutError
  ) {
    status = error.status;
    message = error.message;
    errorSources = [{ path: "", message: message }];
  }
  // Generic
  else if (error instanceof Error) {
    errorSources = [{ path: "", message: error.message }];
  }

  // Send standardized response
  return res.status(status).json({
    success: false,
    message,
    errors: errorSources,
    meta: {
      requestId: (req as any).requestId,
      timestamp: new Date().toISOString(),
    },
    ...(ENV.NODE_ENV === "development" && { stack: error.stack, error }),
  });
};

export default errorHandler;
