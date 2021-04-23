import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Grid, Item, Image, List, Container } from 'semantic-ui-react'
import BodyOptions from '../components/BodyOptions'
import MyCars from "../components/MyCars"

const carsData = "http://localhost:3000/cars"
const deleteCar = "http://localhost:3000/cars/"
class MyCarsContainer extends React.Component {
  state = {
    cars: [],
  }

  componentDidMount() {
    const options = {
      headers: {
        Authorization: `Bearer ${this.props.user}`,
      },
    };
    fetch(carsData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((cars) => this.setState({ cars }));
  }


  handleClick = (carId) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.props.user}`,
      },
    };
    fetch(deleteCar + carId, options)
    .then((res) => {
      const jsonPromise = res.json();

      if (res.ok) {
        return jsonPromise;
      }
      return jsonPromise.then((error) => {
        return Promise.reject(error);
      })
    })
    .then(() => {
      this.setState({
        cars: this.state.cars.filter((car) => car.id !== carId)
      })
      // this.props.history.push("/mycars")
    })
    
  }

  setCarsState = (carId) => {
    this.setState({
      cars: this.state.cars.filter((car) => car.id !== carId)
    })
  }
 
  userCar = () => {
   return this.state.cars.map(car => {
      if (car.user_id === this.props.user.id) {
        return <MyCars handleClick={this.handleClick} car={car} setCarsState={this.setCarsState} key={car.id}/>
      }
    })
  }
  
 

  // findBody = () => {
    
  // } 

  render(){
    return(
      <Container>
        <Grid>
          <Grid.Row>
          {this.userCar()}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
  
}

export default MyCarsContainer;