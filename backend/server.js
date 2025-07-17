const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db_conn = require("./config/db.js");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

app.use("/", require("./routes/user.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

db_conn();
