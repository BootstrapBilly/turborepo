import express from "express";
import "express-async-errors";
import { NotFoundError } from "server-common";

const router = express.Router();

router.all("*", () => {
  throw new NotFoundError();
});

export { router as notFoundRouter };
