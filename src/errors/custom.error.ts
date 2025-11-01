import AppError from "./app.error";

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(404, message);
  }
}
export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}
export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}
export class ConflictError extends AppError {
  constructor(message = "Conflict") {
    super(409, message);
  }
}
export class RateLimitError extends AppError {
  constructor(message = "Too Many Requests") {
    super(429, message);
  }
}
export class ServiceUnavailableError extends AppError {
  constructor(message = "Service Unavailable") {
    super(503, message);
  }
}
export class TimeoutError extends AppError {
  constructor(message = "Request Timeout") {
    super(504, message);
  }
}
