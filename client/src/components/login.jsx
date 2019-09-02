import React, { Component } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-client">
          <div className="title-header">
            <h2>BLA BLA</h2>
          </div>
          <div className="wrapper">
            <div className="block">
              <button type="button" class="btn btn-primary btn-lg">
                Clients
              </button>
            </div>
            <div className="block">
              <button type="button" class="btn btn-secondary btn-lg">
                Partners
              </button>
            </div>
          </div>
          <div className="login-clients">
            <form className="form-class">
              <div className="form-group">
                <label htmlFor="username">
                  <FaUserTie></FaUserTie> Username
                </label>
                <input id="username" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <FaLock></FaLock> Password
                </label>
                <input id="password" type="text" className="form-control" />
              </div>
              <button className="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
