import React, { Component } from 'react'
import { Grid, Item, Image, List, Container } from 'semantic-ui-react'
import MyCars from "../components/MyCars"

// const imgs
const carsData = "http://localhost:3000/cars"

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

  render(){
    return(
      <Container>
        <Grid>
          <Grid.Row>
            { this.state.cars.map((car) => <MyCars car={car} />)}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
  
}

export default MyCarsContainer;