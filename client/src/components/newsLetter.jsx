import React, { Component } from "react";

class NewsLetter extends Component {
  render() {
    return (
      <div className="letter-container">
        <div className="newsletter">
          <h3 id="title-news">BlaBlaBla</h3>
          <p id="paragraph-news">blabalbalabalaba</p>
          <form className="email-news">
              <div className="fieldset">
                <input placeholder="Email" type="email" className="email-text" required autoComplete="off" />
                <button type="submit" className="btn btn-primary">Sign Up </button>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewsLetter;
