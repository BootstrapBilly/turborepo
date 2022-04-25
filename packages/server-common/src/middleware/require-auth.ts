import { Request, Response, NextFunction } from "express";
import { UnauthorisedError } from "../errors";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) {
    throw new UnauthorisedError();
  }

  return next();
};

export default requireAuth;
