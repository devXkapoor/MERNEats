import express from "express";
import { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("GET Working!");
});

app.listen(3000, () => {
  console.log("App listening on PORT 3000!");
});
