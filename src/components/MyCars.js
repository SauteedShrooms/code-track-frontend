import React, { Component } from 'react'
import Stats from "./Stats"
import { Image, List, Container, Divider, Item, Icon, Button } from 'semantic-ui-react'

const MyCars = ({car, handleClick, setCarsState}) => {

  return(
  <Container>
  <Item.Group>    
    <Item>  
      <Item.Image src={`http://localhost:3000/Picture files/${car.image}`} />
      <Item.Content>
        <Item.Header as='a'>{car.name}</Item.Header>
        <Item.Meta>
          <Stats />
        </Item.Meta>
        <Item.Description></Item.Description>
        <Item.Extra>
          <Button onClick={() => {
            handleClick( car.id );
            setCarsState(car.id);
            }} negative floated='right'>
            Delete
            <p></p>
            <Icon name='trash' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  </Container>
  ) 
}

   
export default MyCars;

    // <Container>
    //   <List.Item>
    //       <List.Header>{car.name}</List.Header>
    //     <List.Content>
    //     <Image avatar src={`http://localhost:3000/Picture files/${car.image}`} size='small'/>
    //       <List.Description as='p'></List.Description>
    //     </List.Content>
    //     <Divider></Divider>
    //   </List.Item>
    // </Container>