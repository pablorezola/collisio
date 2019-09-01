import React from "react";
import { Link } from "react-router-dom";
import ib from "../images/ib.jpeg";
import ib2 from "../images/ib2.jpeg";
import ib3 from "../images/ib3.jpeg";
import ib4 from "../images/ib4.jpeg";
import ib5 from "../images/ib5.jpeg";

const Home = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="home-container">
          <div className="home-text">
            <p>blablablablabla</p>
            <h1>blablablablabla</h1>
            <p>blablablabla</p>
            <Link to="/contact">
            <button className="btn btn-primary">Contact</button>
          </Link>
          </div>
        </div>
        <div className="card-container">
            <div className="card">
              <img
                src={ib}
                height="200px"
                className="card-img-top"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">blablablablabla</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src={ib2}
                height="200px"
                className="card-img-top"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">blablablabla</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src={ib3}
                height="200px"
                className="card-img-top"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">blablablablabla</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src={ib4}
                height="200px"
                className="card-img-top"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">blablablablabla</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src={ib5}
                height="200px"
                className="card-img-top"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">blablablablabla</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src={ib5}
                height="200px"
                className="card-img-top"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">blablablablabla</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;