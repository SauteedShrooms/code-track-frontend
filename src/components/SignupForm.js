import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router";


let userData = "http://localhost:3000/users";

class SigupForm extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    age: "",
    email: "",
  };

  resetStates = () => {
    this.setState({
      name: "",
      username: "",
      password: "",
      age: "",
      email: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newAcc = {
      user: {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      },
    };

    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newAcc),
    };

    fetch(userData, reqObj)
      .then((res) => res.json())
      .then((_) => {

      });
    event.target.reset()
  };
      
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        
        <Form.Row>
          
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter a Name"
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter a Username"
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
            />
          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              placeholder="Enter a Age"
              onChange={(event) => this.setState({ age: event.target.value })}
            />
          </Form.Group>
          
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter an Email"
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Enter a Password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </Form.Group>

        </Form.Row>
        <Button 
        variant="primary" 
        type="submit"
        >
        Create Account
        </Button>
      </Form>
    );
  }
}

export default withRouter(SigupForm);
