import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getBooksList } from "../../actions/catalogActions";
import CreateBook from "./CreateBook";
import BooksList from "./BooksList";

class Catalog extends Component {
  componentDidMount() {
    this.props.getBooksList();
  }

  render() {
    const { user } = this.props.auth;
    const { books } = this.props.books;
    let booksCreateForm = (
      <h3>Sorry! You do not have the permission to create catalog items.</h3>
    );
    if (user.isadmin === "yes") {
      booksCreateForm = <CreateBook />;
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <BooksList />
            </div>
            <div className="col-md-6">{booksCreateForm}</div>
          </div>
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  getBooksList: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  books: state.books,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getBooksList }
)(Catalog);
