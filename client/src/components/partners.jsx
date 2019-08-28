import React from 'react';

const Partners = () => {
    return (  <React.Fragment>
          <h2>BLA BLA</h2>
        <div className="login-partners">
          <form>
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
      </React.Fragment> );
}
 
export default Partners;