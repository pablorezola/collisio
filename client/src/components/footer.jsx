import React, { Component } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="column">
            <div className="icons">
              <a className="link" href={"https://www.facebook.com/Collisio-Technologies-2309241972679166/"}>
                <FaFacebook  id="fa" size={20} color="white" />
              </a>
              <a className="link" href={"https://www.linkedin.com/company/collisio-technologies"}>
                <FaLinkedin id="in" size={20} color="white" />
              </a>
              <a  className="link" href={"https://www.instagram.com/collisioTech/"}>
                <FaInstagram id="insta" size={20} color="white" />
              </a>
              <a  className="link" href={"https://github.com/collisio"}>
                <FaGithub id="hub" size={20} color="white" />
              </a>
            </div>
          </div>
          <div className="column">
            <p className="date"> © 2019 Collisio Technologies</p>
            <p className="address">Dr.Fleming 1, Madrid, 28036</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
