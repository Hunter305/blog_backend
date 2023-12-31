import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import db from "./config/db.js";
import cors from "cors";

import { blogRouter } from "./routes/blogRouter.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoute from "./routes/userRoutes.js";

const port = process.env.PORT;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db();
// just adding comments
app.get("/", (req, res) => {
  res.send("app is running");
});

app.use("/api/blog", blogRouter);

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
