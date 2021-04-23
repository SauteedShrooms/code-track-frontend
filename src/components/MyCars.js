import React, { Component } from 'react'
import { Image, List, Container, Divider } from 'semantic-ui-react'

const MyCars = ({car}) => {



  return(
    <Container>
      <List.Item>
          <List.Header>{car.name}</List.Header>
        <List.Content>
        <Image avatar src={`http://localhost:3000/Picture files/${car.image}`} size='small'/>
          <List.Description as='p'></List.Description>
        </List.Content>
        <Divider></Divider>
      </List.Item>
    </Container>
  ) 
}

export default MyCars;