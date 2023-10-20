import User from "../model/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

const authUser = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email });
});

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "register user" });
});

const logoutUser = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "logout user" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "get user profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "get user profile" });
});

const getUsers = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "get all users" });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "delete User" });
});

const getUserById = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "get User by id" });
});

const updateUser = asyncHandler(async (req, res) => {
  const { userName, email } = req.body;
  res.json({ userName, email, message: "updateUser" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
