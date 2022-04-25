import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  format() {
    return [
      {
        message: "Not found",
      },
    ];
  }
}
