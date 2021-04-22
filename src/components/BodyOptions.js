import React from 'react'
import { List, Image } from 'semantic-ui-react'

const BodyOptions = ({body, selectCarPart}) => {
  return(
    <List.Item onClick={() => {selectCarPart(body)}}>
      <List.Content>
        <List.Header>{body.name}</List.Header>
        <Image avatar src={body.image} size='small'/>
      </List.Content>
    </List.Item>
  ) 
}

export default BodyOptions;