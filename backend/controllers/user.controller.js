/**
 * Controller functions for user-related operations.
 * Handles fetching all users and creating a new user.
 */

const User = require("../models/user.model");

// Fetch all users from the database and return as JSON
module.exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
};

// Create a new user with data from the request body and return the created user as JSON
module.exports.createUser = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.name || !req.body.password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate email error from MongoDB
      return res.status(409).json({ message: "Email already exists" });
    }

    // General server error
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
