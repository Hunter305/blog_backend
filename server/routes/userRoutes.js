import {
  authUser,
  registerUser,
  logoutUser,
} from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.post("/", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);

export default router;
