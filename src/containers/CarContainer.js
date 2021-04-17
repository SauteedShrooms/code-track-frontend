import React from "react";
// import CarCard from "../components/CarCard";
// import CarDetails from "../components/CarDetails";
// import SearchFilter from "../components/SearchFilter";
// import Venue from "../components/Venue";
// import logo from "../img/logo.png";

import {
  Grid,
  Card,
  Container,
  Transition,
  List,
  Header,
  Image,
} from "semantic-ui-react";

const carsData = "http://localhost:3001/cars/";

class CarContainer extends React.Component {
  state = {
    cars: [],
    selectedCar: "",
    selected: false,
    venues: [],
    sortBy: "",
    filterVenue: "",
    search: "",
  };

  componentDidMount() {
    const options = {
      headers: {
        Authorization: `Bearer ${this.props.user.jwt}`,
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

   //  fetch(venueData, options)
   //    .then((res) => {
   //      if (res.ok) {
   //        return res.json();
   //      }

   //      return Promise.reject(res.status);
   //    })
   //    .then((venues) => this.setState({ venues }));
  }

  render() {
    return (
      <Container>
        <Transition
          visible={!this.state.selected}
          animation="scale"
          duration={500}
        >
          <Grid celled id="carPage">
            <Grid.Row>
              <Grid.Column width={16} as="h3" textAlign="center">
                STATS
              </Grid.Column>
            </Grid.Row>
            <Grid.Row id="carGrid">
              <Grid.Column width={5} id="partContainer">
                <Header as="h3" textAlign="center" onClick={console.log()}>
                  Parts
                </Header>
                <List divided relaxed size="large">
                  {/* {this.state.venues.map((venue) => (
                    <Venue venue={venue} selectVenue={this.selectVenue} />
                  ))} */}
                </List>
              </Grid.Column>
              <Grid.Column width={6} id="carContainer">
                <Header as="h1" textAlign="center">
                  Cars
                </Header>
                <Grid celled="internally">
                  <Card.Group itemsPerRow={3}>
                    {/* {carList.map((car) => (
                      <CarCard selectCar={this.selectCar} car={car} history={this.props.history}/>
                    ))} */}
                  </Card.Group>
                </Grid>
              </Grid.Column>
              <Grid.Column width={5} id="optionContainer">
                <Header as="h3" textAlign="center" onClick={console.log()}>
                  Options
                </Header>
                <List divided relaxed size="large">
                  {/* {this.state.venues.map((venue) => (
                    <Venue venue={venue} selectVenue={this.selectVenue} />
                  ))} */}
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                Part 1
                <Image src='/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                Part 2
                <Image src='/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                Part 3
                <Image src='/images/wireframe/image.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Transition>
      </Container>
    );
  }
}

export default CarContainer;
