import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Dashboard</h3>
              <hr />
              <div>
                <p className="lead text-muted">
                  Welcome {user.firstname} {user.lastname}.
                  {user.isadmin ? "You are an Admin" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
