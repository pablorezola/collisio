import React, {Component} from "react";
import { Link } from "react-router-dom";

class Home extends Component {

  
  render() { 
    return (
      <React.Fragment>
          <div className="content">
            <div className="home-container">
              <div className="home-text">
                <h1>Investment Technology</h1>
                <p>We deploy monitoring and meta-analysis solutions <br/> for national agencies, investment firms and financial institutions.</p>
                <h1>Scientific Heritage</h1>
                <p>Collisio ® is a private firm combining research backgrounds <br/> from fields as varied as Aerospace, Cryptography and High Performance Computing <br/> into Finance. </p>
                <Link to="/contact">
                  <button type="button" className="btn btn-outline-dark">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
            <div className="letter-container">
              <div className="newsletter">
                <h3 id="title-news">Subscribe to our newsletter</h3>
                <p id="paragraph-news"></p>
                <form className="email-news">
                  <div className="fieldset">
                    <input
                      placeholder="Email address"
                      type="email"
                      className="email-text"
                      required
                      autoComplete="off"
                      />
                    <button type="submit" className="news-button">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    };

  }
 

export default Home;
