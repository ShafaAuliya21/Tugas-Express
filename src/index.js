import express from "express";
import "dotenv/config";
import cors from "cors";
import { db, testConnection } from "./config/database.js";

import notesRoute from "./routes/notesRoute.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", notesRoute);

app.listen(process.env.APP_PORT, () => {
  testConnection();
  console.log(
    `Server is running at http://${process.env.HOST}:${process.env.APP_PORT}`
  );
});