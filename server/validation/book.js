const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateBookAddInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.authors = !isEmpty(data.authors) ? data.authors : "";
  data.publishers = !isEmpty(data.publishers) ? data.publishers : "";
  data.isbn = !isEmpty(data.isbn) ? data.isbn : "";

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.firstname = "Book Title must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.title)) {
    errors.firstname = "Book Title field is required";
  }

  if (!Validator.isLength(data.authors, { min: 2, max: 30 })) {
    errors.lastname = "Authors Names must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.authors)) {
    errors.lastname = "Authors Name field is required";
  }

  if (!Validator.isLength(data.publishers, { min: 2, max: 30 })) {
    errors.lastname = "Publishers Names must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.publishers)) {
    errors.lastname = "Publishers Name field is required";
  }

  if (Validator.isEmpty(data.isbn)) {
    errors.phone = "ISBN number is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
