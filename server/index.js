import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/db.js";
import { blogRouter } from "./routes/blogRouter.js";

const port = process.env.PORT;
const app = express(); 

app.use(express.json());
 
db();
// just adding comments
app.get("/", (req, res) => {
  res.send("app is running"); 
});

app.use("/api/blog",blogRouter)

app.listen(port, () => {
  console.log(`app is running on port ${port}`); 
});
