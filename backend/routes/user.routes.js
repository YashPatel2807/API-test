/**
 * Express router for user-related routes.
 * Defines endpoints for fetching users and creating a new user.
 */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Route to fetch all users (POST method used here, though GET is typical)
router.post("/users", userController.getUsers);

// Route to create a new user
router.post("/create-user", userController.createUser);

module.exports = router;
