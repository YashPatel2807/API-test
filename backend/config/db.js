/**
 * Database connection setup using Mongoose.
 * Connects to MongoDB using the connection string from environment variables.
 */

const mongoose = require("mongoose");

const db_conn = () => {
  // Connect to MongoDB using the connection string from environment variables
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
};

module.exports = db_conn;
