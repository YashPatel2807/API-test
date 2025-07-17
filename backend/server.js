/**
 * Main server file for the backend Express application.
 * Sets up middleware, routes, environment variables, and database connection.
 */

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db_conn = require("./config/db.js");
const cors = require("cors");

// Middleware to parse JSON bodies from HTTP requests
app.use(express.json());

// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing for frontend-backend communication
app.use(cors());

// Load environment variables from .env file
dotenv.config();

// Register user-related routes under the root path
app.use("/", require("./routes/user.routes"));

// Start the server on the specified port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Initialize database connection
db_conn();
