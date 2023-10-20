import User from "../model/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import jwt from "jsonwebtoken";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    //setting http only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await User.create({ userName, email, password });
  if (user) {
    res.json({ userName, email, message: "new user registered" });
  } else {
    res.status(500);
    throw new Error("internal error");
  }
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
