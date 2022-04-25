import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

/* Add in an additional currentUser property to the Request interface provided
by express */
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

const currentUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.session?.jwt;

  if (!token) {
    return next();
  }

  try {
    // tell typescript to infer that the payload is of type UserPayload
    const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;

    req.currentUser = payload;
  } catch (err) {
    console.log(err);
  }

  return next();
};

export default currentUser;
