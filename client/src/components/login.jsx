import React, { Component } from "react";
import city from "../images/city.jpg";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-client">
          <div className="form-container">
            <form className="form-class">
              <div className="title-header">
                <h2>Sign in</h2>
              </div>
              <div className="wrapper">
                <div className="block">
                  <input
                    type="checkbox"
                    id="client-check"
                    defaultChecked={false}
                  />
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
              <label htmlFor="username">Username</label>
              <input id="username" type="text" className="form-control" />
              <label id="label" htmlFor="password">
                Password
              </label>
              <input id="password" type="text" className="form-control" />
              <button className="blue-button">Login</button>
            </form>
          </div>
          <div className="form-container">
            <div className="image-container">
            <img src={city}  alt=""/>  
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
