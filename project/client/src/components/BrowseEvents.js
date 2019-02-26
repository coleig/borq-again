import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class BrowseEvents extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align" style={{padding:"100px"}}>
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}!
            </h4>
              <p>You have {user.events ? user.events.length : 0} events upcoming.
              </p>




            
            <Link to="/mydogs" className="btn btn-lg btn-primary btn-block text-uppercase">My Dogs</Link>
            <Link to="/myevents" className="btn btn-lg btn-primary btn-block text-uppercase">My Events</Link>
            <Link to="/browseevents" className="btn btn-lg btn-primary btn-block text-uppercase">Browse Events</Link>


            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
BrowseEvents.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(BrowseEvents);