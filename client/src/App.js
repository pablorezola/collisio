import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Client from "./components/clients";
import Partner from "./components/partners";
import NotFound from "./components/notFound";
import Contact from "./components/contact";
import Logout from "./components/logout";
import NavBar from "./components/navBar";
import PartnerDashboard from './components/partnerDashboard';
import ClientDashboard from './components/clientDashboard';
import Footer from './components/footer';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/clients" component={ClientDashboard} />
          <Route path="/partners" component={PartnerDashboard} />
          <Route path="/client-login" component={Client} />
          <Route path="/partner-login" component={Partner} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
