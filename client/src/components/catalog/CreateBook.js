import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class CreateBook extends Component {
  render() {
    const { user } = this.props.auth;
    // booksForm
    // if(user.isAdmin) {

    // } else {

    // }
    return (
      <div className="container">
        <h3>Books Creation form coming up</h3>
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
