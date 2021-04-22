import React from 'react'
import { List, Image } from 'semantic-ui-react'

const WheelOptions = ({wheel, selectCarPart}) => {
  return(
    <List.Item onClick={() => {selectCarPart(wheel)}}>
      <List.Content>
        <List.Header>{wheel.name}</List.Header>
        <Image avatar src={wheel.image} size='small'/>
      </List.Content>
    </List.Item>
  ) 
}

export default WheelOptions;