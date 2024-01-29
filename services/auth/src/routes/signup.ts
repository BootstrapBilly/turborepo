import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "service-common";
import { AccountCreatedPublisher } from "../events";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be between 8 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.addNew({
      email,
      password,
    });

    await user.save();

    const token = jwt.sign(
      {
        id: user.id,
        email,
      },
      process.env.JWT_KEY!,
    );

    req.session = {
      jwt: token,
    };

    await new AccountCreatedPublisher(natsWrapper.client).publish({
      userId: user.id,
    });

    return res.status(201).json(user);
  },
);

export { router as signupRouter };
