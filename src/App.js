import React, { Component } from "react";
import {
  Router,
  Route,
} from "react-router";
import history from "./history";
import Welcome from "./components/Welcome";
import TopNav from "./components/TopNav";
import NewCarContainer from "./containers/NewCarContainer"
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import SignupForm from "./components/SignupForm";
import Profile from "./components/Profile"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react";
import MyCarsContainer from "./containers/MyCarsContainer";

class App extends Component {
  
  state = {
    user: null,
  }
     
  login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({ user });
    this.props.setUserState(user);
  };

  logout = () => {
    localStorage.removeItem("user");
    this.setState({ user: null });
  };

  render(){
    return (
      <div className="App">
        <Container>
        

        <Router history={history}>
            <Route path='/' component={props => <TopNav {...props} /> } />
            <Route exact path='/' component={props => <Welcome {...props} />} />
            <Route 
            exact 
            path='/newcar' 
            component={props => (
            <NewCarContainer {...props} user={this.state.user} />
            )} 
            />
            <Route 
            exact 
            path='/mycars' 
            component={props => (
            <MyCarsContainer {...props} user={this.state.user} />
            )} 
            />
            {/* <Route path='/race'>
              <RaceContainer />
            </Route> */}
            <Route 
            exact 
            path='/profile' 
            component={props => (
            <Profile {...props} />
            )} 
            />            
            <Route 
            exact 
            path='/login' 
            component={props => (
            <LoginForm login={this.login} {...props} />
            )} 
            />
            <Route 
            exact 
            path='/logout' 
            component={props => (<Logout logout={this.logout} {...props} />
            )} 
            />
            <Route 
            exact 
            path='/signup' 
            component={props => (<SignupForm login={this.login} {...props} />
            )} 
            />
          
        </Router>

        </Container>
      </div>
    );
  }

}

const mapStateToProps= (state) => {
  return{
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUserState: (user) => dispatch({ type: "SET_USER", user})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
