import express from "express";
import { errorHandler } from "server-common";
import {
  currentUserRouter,
  notFoundRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true); // trust traffic coming through nginx

app.use(express.json());

app.use(
  cookieSession({
    // cookie storage middleware, sets up the req.session property on the request, comes with httponly out of the box
    signed: false,
    secure: process.env.NODE_ENV !== "test", // only set cookies over https connections, and not for test envs
  }),
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(notFoundRouter);

app.use(errorHandler);

export default app;
