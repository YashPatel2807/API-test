/**
 * Mongoose schema and model definition for User.
 * Defines the structure and constraints for user documents in MongoDB.
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // User's full name, required field
  name: { type: String, required: true },

  // User's email address, required and unique
  email: { type: String, required: true, unique: true },

  // User's password, required field
  password: { type: String, required: true },

  // Flag indicating if the user has admin privileges, defaults to false
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
