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
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};
