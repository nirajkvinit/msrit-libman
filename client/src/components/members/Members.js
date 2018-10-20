import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Members extends Component {
  render() {
    const { user } = this.props.auth;
    let loggedinContent =
      "You must be a loggedin user to see the list of members";
    if (user.firstname) {
      loggedinContent = <h3>Component Under construction!</h3>;
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Library Members List</h3>
              <hr />
              {loggedinContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Members.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Members);
