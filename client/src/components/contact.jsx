import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-container">
          <div className="contact-form">
            <Form>
              <FormGroup controlId="formBasicEmail">
                <h2 className="form-title"> Reach us</h2>
                <Label className="text-label">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  value=""
                  className="text-primary"
                  onChange
                />
              </FormGroup>
              <FormGroup controlId="formBasicName">
                <Label className="text-label">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value=""
                  className="text-primary"
                  onChange
                />
              </FormGroup>
              <FormGroup controlId="formBasicSubject">
                <Label className="text-label">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  className="text-primary"
                  value=""
                  onChange
                />
              </FormGroup>
              <FormGroup controlId="formBasicMessage">
                <Label className="text-label">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  className="text-primary"
                  value=""
                  onChange
                />
              </FormGroup>
              <button
                className="btn btn-outline-dark"
                variant="primary"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
