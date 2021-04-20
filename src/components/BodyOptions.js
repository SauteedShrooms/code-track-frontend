import React from 'react'
import { List, Image } from 'semantic-ui-react'

const BodyOptions = ({body, selectBody}) => {
  return(
    <List.Item>
      <Image avatar src={body.image} size='small'/>
      <List.Content>
        <List.Header onClick={() => selectBody(body.id)}>{body.name}</List.Header>
        <List.Description as='p'>{body.name}</List.Description>
      </List.Content>
    </List.Item>
  ) 
}

export default BodyOptions;