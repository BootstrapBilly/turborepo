import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/users/signout", (req: Request, res: Response) => {
  req.session = null;

  return res.status(200).json({ currentUser: null });
});

export { router as signoutRouter };
