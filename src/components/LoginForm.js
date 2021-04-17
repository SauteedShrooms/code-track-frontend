import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  setUsername = (username) => {
    this.setState({ username, error: '' });
  };

  setPassword = (password) => {
    this.setState({ password, error: '' });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      password: this.state.password,
    };

    let reqObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: newUser }),
    };

    fetch("http://127.0.0.1:3001/login", reqObj)
      .then((res) => {
        const jsonPromise = res.json();

        if (res.ok) {
          return jsonPromise;
        }

        return jsonPromise.then((error) => {
          return Promise.reject(error);
        });
      })
      .then((user) => {
        this.props.login(user);
        this.props.history.replace("/cars");
      })
      .catch(({ error }) => {
        this.setState({
          error,
        });
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter a Username"
            value={this.state.username}
            onChange={(e) => this.setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a Password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e.target.value)}
          />
        </Form.Group>
        <div>{this.state.error}</div>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }         
};

export default LoginForm;
