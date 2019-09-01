import React, { Component } from "react";

class Client extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-client">
        <div className="title-header">
        <h2>BLA BLA</h2>
        </div>
        <div className="login-clients">
          <form className="form-class">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="text" className="form-control" />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Client;
