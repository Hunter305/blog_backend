import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.route("/").post(authUser);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);

export default router;
