import jwt from "jsonwebtoken";
import { Password } from "./../util/password";
import express, { Request, Response } from "express";
import { User } from "../models";
import { body } from "express-validator";
import { validateRequest, BadRequestError } from "server-common";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").trim().notEmpty().withMessage("Enter a password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new BadRequestError("Invalid email or password");
    }

    const passwordMatches = await Password.compare(user.password, password);

    if (!passwordMatches) {
      throw new BadRequestError("Invalid email or password");
    }

    const token = jwt.sign(
      {
        id: user.id,
        email,
      },
      process.env.JWT_KEY!,
    );

    // store the jwt on the req.session as a cookie
    req.session = {
      jwt: token,
    };

    return res.status(200).json(user);
  },
);

export { router as signinRouter };
