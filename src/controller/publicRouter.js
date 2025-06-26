
import { Router } from "express";

const publicRouter = Router();

publicRouter.get("/", async (req, res) => {
  res.status(200).render("index");
});

export default publicRouter;