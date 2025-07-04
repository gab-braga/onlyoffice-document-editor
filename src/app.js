import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import publicRouter from "./controller/publicRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(publicRouter);

app.listen(8080, () => {
  console.log("Server is running");
});