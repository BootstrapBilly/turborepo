import { CustomError } from "./customError";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(private reason: string) {
    super(reason);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  format() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
