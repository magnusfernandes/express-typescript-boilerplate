"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = exports.NotAuthenticatedError = exports.NotAuthorizedError = exports.BadRequestError = exports.ResourceNotFoundError = void 0;
class DomainError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
class ResourceNotFoundError extends DomainError {
    constructor(resource, query) {
        super(`${resource} was not found.`);
        this.data = { resource, query };
    }
}
exports.ResourceNotFoundError = ResourceNotFoundError;
class BadRequestError extends DomainError {
    constructor(error) {
        super(`${error}`);
        this.data = { error };
    }
}
exports.BadRequestError = BadRequestError;
class NotAuthorizedError extends DomainError {
    constructor(error) {
        super(`Access Forbidden: ${error}`);
        this.data = { error };
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
class NotAuthenticatedError extends DomainError {
    constructor(error) {
        super(`Not Authenticated: ${error}`);
        this.data = { error };
    }
}
exports.NotAuthenticatedError = NotAuthenticatedError;
class InternalError extends DomainError {
    constructor(error) {
        super(error.message);
        this.data = { error };
    }
}
exports.InternalError = InternalError;
const Errors = {
    ResourceNotFoundError,
    InternalError,
    NotAuthorizedError,
    BadRequestError,
    NotAuthenticatedError
};
exports.default = Errors;
