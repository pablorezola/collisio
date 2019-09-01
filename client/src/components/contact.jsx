import React, { Component } from "react";
import { FormFeedback, Form, FormGroup, Label, Input } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-container">
          <div className="contact-form">
            <Form>
              <FormGroup controlId="formBasicEmail">
                <h2 className="form-title"> Contact Us!</h2>
                <Label className="text-muted">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  value=""
                  className="text-primary"
                  onChange
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup controlId="formBasicName">
                <Label className="text-muted">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value=""
                  className="text-primary"
                  onChange
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup controlId="formBasicSubject">
                <Label className="text-muted">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  className="text-primary"
                  value=""
                  onChange
                  placeholder="Subject"
                />
              </FormGroup>
              <FormGroup controlId="formBasicMessage">
                <Label className="text-muted">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  className="text-primary"
                  value=""
                  onChange
                />
              </FormGroup>
              <button
                className="btn btn-primary"
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
