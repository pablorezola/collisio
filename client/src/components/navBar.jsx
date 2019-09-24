import React, { Component} from "react";
import logo from "../images/collissio.png";
import { Link } from "react-router-dom";


class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <header className="nav-header">
          <div className="bar-container">
            <div className="column">
              <Link to="/">
                <img className="logo" src={logo} height="80px" alt="" />
              </Link>
            </div>
            <div className="column" id="nav-links">
              <ul className="listing">
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", fontSize: "22px" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", fontSize: "22px" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default NavBar;
