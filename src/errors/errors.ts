class DomainError extends Error {
  data: any;
  constructor(message: any) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ResourceNotFoundError extends DomainError {
  constructor(resource: string, query?: string) {
    super(`${resource} was not found.`);
    this.data = { resource, query };
  }
}

export class BadRequestError extends DomainError {
  constructor(error: any) {
    super(`${error}`);
    this.data = { error };
  }
}

export class NotAuthorizedError extends DomainError {
  constructor(error: any) {
    super(`Access Forbidden: ${error}`);
    this.data = { error };
  }
}

export class NotAuthenticatedError extends DomainError {
  constructor(error: any) {
    super(`Not Authenticated: ${error}`);
    this.data = { error };
  }
}

export class InternalError extends DomainError {
  constructor(error: any) {
    super(error.message);
    this.data = { error };
  }
}

const Errors = {
  ResourceNotFoundError,
  InternalError,
  NotAuthorizedError,
  BadRequestError,
  NotAuthenticatedError
};

export default Errors;