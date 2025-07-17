const User = require("../models/user.model");

module.exports.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
};

module.exports.createUser = async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};
