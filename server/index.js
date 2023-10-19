import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/db.js";

const port = process.env.PORT;
const app = express();

db();
// just adding comments
app.get("/", (req, res) => {
  res.send("app is running");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
