import React from "react";
// import PartsContainer from "../containers/PartsContainer"
// import CarCard from "../components/CarCard";
// import CarDetails from "../components/CarDetails";
import BodyOptions from "../components/BodyOptions"
import PaintOptions from "../components/PaintOptions"
import WheelOptions from "../components/WheelOptions"
import SpoilerOptions from "../components/SpoilerOptions"

import {
  Grid,
  Container,
  Segment,
  List,
  Header,
  Image,
  Button,
  Item,
  Dimmer,
  Divider,
} from "semantic-ui-react";

const bodiesData = "http://localhost:3000/bodies"
const paintsData = "http://localhost:3000/paints"
const wheelsData = "http://localhost:3000/wheels"
const spoilersData = "http://localhost:3000/spoilers"
const carsData = "http://localhost:3000/cars/";

class NewCarContainer extends React.Component {
  state = {
    bodies: [],
    paints: [],
    wheels: [],
    spoilers: [],
    cars: [],
    selectedPart: "",
    selectedCarPart: {},
  };

  componentDidMount() {
    const options = {
      headers: {
        Authorization: `Bearer ${this.props.user}`,
      },
    };

    fetch(bodiesData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((bodies) => this.setState({ bodies }));
    
    fetch(paintsData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((paints) => this.setState({ paints }));

    fetch(wheelsData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((wheels) => this.setState({ wheels }));
    
    fetch(spoilersData, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((spoilers) => this.setState({ spoilers }));
  }

  selectCarPart = (selectedCarPart) => {
    this.setState({selectedCarPart: selectedCarPart})
  }

  // applySelectedPart = () => {
  //   this.state.selectedCarPart
  // }

  render() {
    return (
      <Container>
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
                Car Parts
                </Header>

                <List>
                    <br></br>
                    <Button onClick={() => (this.setState({selectedPart: "Bodies"}))} >Body</Button>
                    <br></br>
                    <Button onClick={() => (this.setState({selectedPart: "Paints"}))} >Paint</Button>
                    <br></br>
                    <Button onClick={() => (this.setState({selectedPart: "Wheels"}))} >Wheels</Button>
                    <br></br>
                    <Button onClick={() => (this.setState({selectedPart: "Spoilers"}))} >Spoiler</Button>
                </List>
                 
              </Grid.Column>

              <Grid.Column id="carContainer" >
                <Header as="h3" textAlign="center">
                  Part Select
                </Header>
                <Grid>
                  <Image src={this.state.selectedCarPart.image} />
                  <Button onClick={() => (this.setState({}))} fluid primary type="submit">
                    Apply
                  </Button>
                </Grid>
              </Grid.Column>


              <Grid.Column id="optionContainer">
                <Header as="h3" textAlign="center">
                  Options
                </Header>
                <Segment size="large" style={{overflow: 'auto', maxHeight: 300 }}>
                  { this.state.selectedPart === "Bodies" ?
                      this.state.bodies.map((body) => <BodyOptions selectCarPart={this.selectCarPart} body={body} key={body.id} />) : null }
                  { this.state.selectedPart === "Paints" ?
                      this.state.paints.map((paint) => <PaintOptions selectCarPart={this.selectCarPart} paint={paint} key={paint.id} />) : null }
                  { this.state.selectedPart === "Wheels" ?
                      this.state.wheels.map((wheel) => <WheelOptions selectCarPart={this.selectCarPart} wheel={wheel} key={wheel.id} />) : null }
                  { this.state.selectedPart === "Spoilers" ?
                      this.state.spoilers.map((spoiler) => <SpoilerOptions selectCarPart={this.selectCarPart} spoiler={spoiler} key={spoiler.id} />) : null }  
                </Segment>
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
      </Container>
    );
  }
}

export default NewCarContainer;
