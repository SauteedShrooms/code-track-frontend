import React from 'react'
import { List, Image } from 'semantic-ui-react'

const SpoilerOptions = ({spoiler, selectCarPart}) => {
  return(
    <List.Item onClick={() => {selectCarPart(spoiler)}}>
      <List.Content>
        <List.Header> {spoiler.name} </List.Header>
        <Image avatar src={spoiler.image} size='small'/>
      </List.Content>
    </List.Item>
  ) 
}

export default SpoilerOptions;