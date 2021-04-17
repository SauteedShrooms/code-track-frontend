import React, { Component } from 'react'
import ProfileContainer from '../containers/ProfileContainer'
import { Grid, Item, Header, Divider } from 'semantic-ui-react'


const Profile = ({user}) => {

  return(
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header>
            {user.name}
          </Header>
          <Item>Age: {user.age}</Item>
          <Item>Email: {user.email}</Item>
          <Item>{user.artista}</Item>
          <Divider hidden />
          <Item.Description>{user.bio}</Item.Description>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Profile;