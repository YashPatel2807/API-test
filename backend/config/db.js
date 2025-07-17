const mongoose = require("mongoose");

const db_conn = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
};

module.exports = db_conn;
