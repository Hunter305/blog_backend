import User from "../model/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
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

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    userName,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
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
