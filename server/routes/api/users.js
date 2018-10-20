const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//load input validation for register route
const validateRegisterInput = require("../../validation/register");

//load input validation for login route
const validateLoginInput = require("../../validation/login");

//Load User Model
const User = require("../../models/User");
const keys = require("../../config/keys");

// @route   POST api/users/register
// @desc    Register User route
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "Email already exist";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password,
          isadmin: req.body.email === "nirajkvinit@gmail.com" ? "yes" : "no"
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(error => {
      console.log(errs);
      return res.status(400).json(err);
    });
});

// @route   GET api/users/login
// @desc    login User route / Returning JWT Token
// @access  Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // check for user
    if (!user) {
      errors.email = "User does not exists";
      return res.status(404).json(errors);
    }

    //Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User matched
        const payload = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          isadmin: user.isadmin
        }; // Create JWT Payload

        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      email: req.user.email,
      phone: req.user.phone
    });
  }
);

module.exports = router;
