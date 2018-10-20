const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

// connnect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

app.get("/", (req, res) =>
  res.send("Welcome t MSRIT Library Management System")
);

app.use("/api/users", users);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
