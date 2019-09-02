import React, { Component } from "react";
import logo from "../images/collissio.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav-header">
          <Link to="/">
            <img className="logo" src={logo} height="60px" alt="" />
          </Link>
          <nav className="nav-bar">
            <ul className="listing">
              <li>
                <Link to="/" style={{textDecoration: "none"}}>Home</Link>
              </li>
              <li>
                <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
              </li>
              <li>
                <Link to="/contact"style={{textDecoration: "none"}}>Contact</Link>
              </li>
            </ul>
          </nav>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
