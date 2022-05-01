import { ValidationError } from "express-validator";
import { CustomError } from "./customError";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public validationErrors: ValidationError[]) {
    super("Invalid request parameters");
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  format() {
    return this.validationErrors.map(({ msg, param }) => ({
      message: msg,
      field: param,
    }));
  }
}
