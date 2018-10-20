const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  publishers: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    default: null
  },
  isbn: {
    type: String,
    required: true
  },
  edition: {
    type: String,
    default: null
  },
  stock: {
    type: Number,
    default: 0
  },
  publishdate: {
    type: Date,
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model("books", BookSchema);
