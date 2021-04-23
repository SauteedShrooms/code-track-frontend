import React from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        username: "",
        password: "",
      };
  }

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

    fetch("http://localhost:3000/login", reqObj)
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
        console.log(user)
        this.props.login(user.user)
        this.props.setUserState(user.user)
        
      })
      .catch(({ error }) => {
        this.setState({
          error,
        });
      });
    event.target.reset()
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

// class LoginForm extends React.Component {
  
//   state = {
//     email: '',
//     password: ''
//   }
  
//   handleInputChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
  
//   handleSubmit = (e) => {
//     e.preventDefault()
//     fetch('http://localhost:3000/auth',{
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ user: { ...this.state }})
//     }).then(res => res.json())
//     .then(msg => {
//       localStorage.setItem('auth_key',msg.token)
//       this.props.history.push('/')
//     })
//   }
  
//   