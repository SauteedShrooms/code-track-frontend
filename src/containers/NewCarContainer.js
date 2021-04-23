import React from "react";
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
} from "semantic-ui-react";
import { Form } from "react-bootstrap";


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
    carName: "",
    selectedCarPart: {},
    selectedBody: {},
    selectedPaint: {},
    selectedWheel: {},
    selectedSpoiler: {},
  };

  componentDidMount() {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.auth_key}`,
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

  // selectPaintOption = (selectedCarPart) => {
  //   if (this.state.selectedBody.name === "Sports Car")
  //      
  // }

  selectCarPart = (selectedCarPart) => {
    this.setState({selectedCarPart: selectedCarPart})
  }

  applySelectedPart = (selectedCarPart) => {
    if (this.state.selectedCarPart.partType === "body") {
       this.setState({selectedBody: selectedCarPart})
    } else if (this.state.selectedCarPart.partType === "paint") {
       this.setState({selectedPaint: selectedCarPart}) 
    } else if (this.state.selectedCarPart.partType === "wheel") {
       this.setState({selectedWheel: selectedCarPart})
    } else if (this.state.selectedCarPart.partType === "spoiler") {
       this.setState({selectedSpoiler: selectedCarPart})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newCar = {
      user_id: this.props.user.id,
      carName: this.state.carName,
      body: this.state.selectedBody.id,
      paint: this.state.selectedPaint.id,
      wheel: this.state.selectedWheel.id,
      spoiler: this.state.selectedSpoiler.id,
      image: `${this.state.selectedBody.name}_(${this.state.selectedPaint.name})_${this.state.selectedWheel.name}_${this.state.selectedSpoiler.name}.jpg`
    };

    let reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newCar),
    };

    fetch(carsData, reqObj)
    .then((res) => res.json())
    .then((_) => {
      
    });
  };
  
    
    render() {
      return (
        <Container>
          <Grid celled id="carPage" >


               <Grid.Row columns='equal' >
                <Grid.Column>
                  <Header color="blue" as="h3" textAlign="center">Speed</Header>
                    <Segment textAlign="center" >
                      { this.state.selectedCarPart.speed }
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Header color="green" as="h3" textAlign="center">Efficiency</Header>
                    <Segment textAlign="center">
                      { this.state.selectedCarPart.efficency }
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Header color="red" as="h3" textAlign="center">Power</Header>
                    <Segment textAlign="center">
                      { this.state.selectedCarPart.power }
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
                <>
                  <Image src={this.state.selectedCarPart.image} />
                  <Button onClick={() => (this.applySelectedPart(this.state.selectedCarPart))} fluid primary type="submit">
                    Apply
                  </Button>
                </>
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
                <Image size="small centered" src={this.state.selectedPaint.image} />
              </Grid.Column>
              <Grid.Column>
                Part 2
                <Image size="small centered" src={this.state.selectedWheel.image} />
              </Grid.Column>
              <Grid.Column>
                Part 3
                <Image size="small centered" src={this.state.selectedSpoiler.image} />
              </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={2} >
              <Grid.Column>
                <Header>Finished Car Preview</Header>
                <Image src={`http://localhost:3000/Picture files/${this.state.selectedBody.name}_(${this.state.selectedPaint.name})_${this.state.selectedWheel.name}_${this.state.selectedSpoiler.name}.jpg`}/>
                {/*  */}
              </Grid.Column>
              <Grid.Column>
                <Form>
                  <Form.Control onChange={(event) => this.setState({carName: event.target.value})} type="name" placeholder="Name your Car"/>
                </Form>
                <Button onClick={this.handleSubmit} primary floated="right" type="submit" href="/mycars" >Finish</Button>
              </Grid.Column>
            </Grid.Row>
            



          </Grid>
      </Container>
    );
  }
}

export default NewCarContainer;
