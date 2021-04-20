import React from "react";
// import CarCard from "../components/CarCard";
// import CarDetails from "../components/CarDetails";

import {
  Grid,
  Card,
  Container,
  Segment,
  Transition,
  List,
  Header,
  Image,
} from "semantic-ui-react";

const paint = "http://localhost:3001/paints"
const wheelsData = "http://localhost:3001/wheels"
const spoilersData = "http://localhost:3001/spoilers"
const bodiesData = "http://localhost:3001/bodies"
const carsData = "http://localhost:3001/cars/";

class NewCarContainer extends React.Component {
  state = {
    bodies: [],
    paints: [],
    wheels: [],
    spoilers: [],
    cars: [],
    selectedCar: "",
    selected: false,
  };

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
    
    fetch(carsData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((cars) => this.setState({ cars }));

    fetch(carsData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((cars) => this.setState({ cars }));
    
    fetch(carsData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((cars) => this.setState({ cars }));
  }

  

  render() {
    return (
      <Container>
        <Transition
          visible={!this.state.selected}
          animation="scale"
          duration={500}
        >
          <Grid celled id="carPage" >


              <Grid.Row columns='equal' >
                <Grid.Column>
                  <Header color="blue" as="h3" textAlign="center">Speed</Header>
                    <Segment textAlign="center" >
                      61
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Header color="green" as="h3" textAlign="center">Efficiency</Header>
                    <Segment textAlign="center">
                      43
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Header color="red" as="h3" textAlign="center">Power</Header>
                    <Segment textAlign="center">
                      84
                    </Segment>
                </Grid.Column>
              </Grid.Row>


            <Grid.Row columns="3" >
  
              <Grid.Column id="partContainer" >
                <Header as="h3" textAlign="center">
                  Parts
                </Header>
                <List divided relaxed size="large" onClick={console.log()}>
                 
                </List>
              </Grid.Column>

              <Grid.Column id="carContainer" >
                <Header as="h3" textAlign="center">
                  CAR
                </Header>
                <Grid>
                  <Card.Group >
                  {/* <Car /> */}
                    {/* {carList.map((car) => (
                      <CarCard selectCar={this.selectCar} car={car} history={this.props.history}/>
                    ))} */}
                  </Card.Group>
                </Grid>
              </Grid.Column>

              <Grid.Column id="optionContainer">
                <Header as="h3" textAlign="center">
                  Options
                </Header>
                <List divided relaxed size="large">
                  {/* {this.state.bodies.map((body) => (
                    <OptionsContainer  />
                  ))} */}
                </List>
              </Grid.Column>
            </Grid.Row>


            <Grid.Row textAlign="center" columns={3}>
              <Grid.Column>
                Part 1
                <Image size="small centered" src='https://static.wikia.nocookie.net/villains/images/e/ea/HicksHD2.png/revision/latest?cb=20180410223313' />
              </Grid.Column>
              <Grid.Column>
                Part 2
                <Image size="small centered" src='https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png' />
              </Grid.Column>
              <Grid.Column>
                Part 3
                <Image size="small centered" src='https://static.wikia.nocookie.net/heroes-and-villians/images/b/b4/IMG_0034.PNG/revision/latest?cb=20171025150220' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Transition>
      </Container>
    );
  }
}

export default NewCarContainer;
