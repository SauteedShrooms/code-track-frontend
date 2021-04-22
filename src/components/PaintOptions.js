import React from "react"
import { List, Image } from 'semantic-ui-react'

const PaintOptions = ({paint, selectCarPart}) => {
  return(
    <List.Item onClick={() => {selectCarPart(paint)}}>
      <List.Content>
         <List.Header>{paint.name}</List.Header>
         <Image avatar src={paint.image} size='small'/>
      </List.Content>
    </List.Item>
  ) 
}
export default PaintOptions;