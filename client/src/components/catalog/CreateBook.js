import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class CreateBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authors: "",
      publishers: "",
      summary: "",
      isbn: "",
      edition: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(evt) {
    evt.preventDefault();
    const bookData = {
      title: this.state.title,
      authors: this.state.authors,
      publishers: this.state.publishers,
      summary: this.state.summary,
      isbn: this.state.isbn,
      edition: this.state.edition
    };
    // this.props.createBook(bookData, this.props.history);
    console.log(bookData);
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container border-left">
        <h3>Add a book into the catalog</h3>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* Book Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            error={errors.title}
            info="Book title"
          />

          <TextFieldGroup
            placeholder="* Authors Name"
            name="authors"
            value={this.state.authors}
            onChange={this.onChange}
            error={errors.authors}
            info="Authors Names"
          />

          <TextFieldGroup
            placeholder="* Publishers"
            name="publishers"
            value={this.state.publishers}
            onChange={this.onChange}
            error={errors.publishers}
            info="Publishers Names"
          />
          <TextFieldGroup
            placeholder="ISBN"
            name="isbn"
            value={this.state.isbn}
            onChange={this.onChange}
            error={errors.isbn}
            info="ISBN Number"
          />

          <TextFieldGroup
            placeholder="Edition"
            name="edition"
            value={this.state.edition}
            onChange={this.onChange}
            error={errors.edition}
            info="Book's Edition"
          />
          <TextAreaFieldGroup
            placeholder="Summary"
            name="summary"
            value={this.state.summary}
            onChange={this.onChange}
            error={errors.summary}
            info="Book Summary"
          />

          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    );
  }
}

CreateBook.propTypes = {
  books: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  books: state.books,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(CreateBook);
