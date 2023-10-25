import express from "express";
import { addBlog, allBlog, updateBlog,deleteBlog, getBlog } from "../controllers/blogControllers.js";

const router = express.Router();

router.route("/create").post(addBlog);
router.route("/").get(allBlog);
router.route("/:id").get(getBlog);
router.route("/edit/:id").put(updateBlog);
router.route("/:id").delete(deleteBlog);



export const blogRouter = router;