import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class BooksList extends Component {
  render() {
    const { books } = this.props.books;
    return (
      <div className="container">
        <h3>Books list Coming up</h3>
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
