import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <Link to="/landing" className="navbar-brand">Borq</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/register" className="navbar-brand">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="navbar-brand">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to="/registerdog" className="navbar-brand">Add Dog</Link>
                </li>
                                <li className="nav-item">
                  <Link to="/registerevent" className="navbar-brand">Add Event</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;