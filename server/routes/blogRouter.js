import express from "express";
import {
  addBlog,
  allBlog,
  updateBlog,
  deleteBlog,
} from "../controller/blogController.js";

const router = express.Router();

router.route("/create").post(addBlog);
router.route("/").get(allBlog);
router.route("/edit/:id").put(updateBlog);
router.route("/:id").delete(deleteBlog);

export const blogRouter = router;
