const express = require("express");
const router = express.Router();
const passport = require("passport");

//load input validation for register route
const validateBookAddInput = require("../../validation/book");

//Load Book Model
const User = require("../../models/Book");

// @route   GET api/books
// @desc    Get all Books
// @access  Public
router.get("/", (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: "No books found" }));
});

// @route   GET api/books/:id
// @desc    Get book by id
// @access  Public
router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err =>
      res.status(404).json({ nobookfound: "No book found with that ID" })
    );
});

// @route   POST api/books
// @desc    Create a book
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBookAddInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newBook = new Book({
      title: req.body.title,
      authors: req.body.authors,
      publishers: req.body.publishers,
      summary: req.body.summary,
      isbn: req.body.isbn,
      edition: req.body.edition
    });

    newBook.save().then(book => res.json(book));
  }
);

module.exports = router;
