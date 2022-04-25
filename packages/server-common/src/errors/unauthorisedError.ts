import { CustomError } from "./customError";

export class UnauthorisedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Unauthorised");

    Object.setPrototypeOf(this, UnauthorisedError.prototype);
  }

  format() {
    return [
      {
        message: "Unauthorised",
      },
    ];
  }
}
