import React, { Component } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-client">
          <form className="form-class">
          <div className="title-header">
            <h2>BLA BLA</h2>
          </div>
          <div className="wrapper">
            <div className="block">
              <input type="checkbox" id="client-check" defaultChecked={false} />
              Client
            </div>
            <div className="block2">
              <input
                type="checkbox"
                id="partner-check"
                defaultChecked={false}
              />
              Partner
            </div>
          </div>
            <label htmlFor="username">
              <FaUserTie></FaUserTie> Username
            </label>
            <input id="username" type="text" className="form-control" />
            <label id="label" htmlFor="password">
              <FaLock></FaLock> Password
            </label>
            <input id="password" type="text" className="form-control" />
            <button className="blue-button btn btn-success">Login</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
