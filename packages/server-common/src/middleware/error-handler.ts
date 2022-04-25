import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.format() });
  }

  console.log(err);
  return res.status(500).json({
    errors: [
      {
        message: "Something went wrong",
      },
    ],
  });
};

export default errorHandler;
