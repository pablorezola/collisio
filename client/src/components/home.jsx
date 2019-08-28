import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = element => {
    this.setState({ [element.target.name]: element.target.value });
  };

 async handleSubmit(element) {
      element.preventDefault()

      const { email, message} = this.state;

      const form = await axios.post("/api/form", {
        email,
        message

      })
  }


  render() {
    return (
      <div className="home-container">
        <Form onSubmit={this.handleSubmit} style={{ width: "300px" }}>
          <FormGroup>
            <label for="email">Email:</label>
            <Input type="email" name="email" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <label for="message">Message:</label>
            <Input
              type="textarea"
              name="message"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Home;
