import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import TopNav from "./components/TopNav";
import NewCarContainer from "./containers/NewCarContainer"
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import SignupForm from "./components/SignupForm";
import Profile from "./components/Profile"

import { Container } from "semantic-ui-react";

class App extends Component {
  
  state = {
    user: "",
    isLoggedIn: false,
  }
     
  login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({ user });
  };

  logout = () => {
    localStorage.removeItem("user");
    this.setState({ user: null });
  };

  render(){
    // console.log("hello")
    return (
      <div className="App">
        <Container>
        <TopNav isLoggedIn={this.state.isLoggedIn} />

        <Router>
          <Switch>
            <Route exact path='/'>
              <Welcome />
            </Route>

            <Route path='/newcar'>
              <NewCarContainer />
            </Route>

            {/* <Route path='/mycars'>
              <MyCarsContainer />
            </Route>
            
            <Route path='/race'>
              <RaceContainer />
            </Route> */}

            <Route path='/profile'>
              <Profile  />
            </Route>
            
            <Route path='/login'>
              <LoginForm isLoggedIn={this.isLoggedIn} login={this.login}  />
            </Route>

            <Route 
            path='/logout'
            render={(routeProps) => (
              <Logout logout={this.logout} {...routeProps} />
            )}
            />

            <Route 
            path='/signup'
            render={(routerProps) => (
              <SignupForm isLoggedIn={this.isLoggedIn} login={this.login} />
            )}
            />

            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Router>

        </Container>
      </div>
    );
  }

}

export default App;
