import express from "express";
import {
  addBlog,
  allBlog,
  updateBlog,
  deleteBlog,
  getBlog,
} from "../controller/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/create").post(addBlog);
router.route("/").get(allBlog);
router.route("/:id").get(getBlog).delete(deleteBlog);
router.route("/edit/:id").put(updateBlog);

export const blogRouter = router;
