import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class BooksList extends Component {
  render() {
    const { books } = this.props.books;
    return (
      <div className="container">
        <h3>Books list:</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Authors</th>
              <th>ISBN</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Beginning Functional JavaScript</td>
              <td>Anto Aravinth</td>
              <td>978-1-4842-2655-1</td>
              <td>Apress</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Functional Python Programming</td>
              <td>Steven Lott</td>
              <td>978-1-78439-699-2</td>
              <td>Packt</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  books: state.books
});

export default connect(
  mapStateToProps,
  {}
)(BooksList);
