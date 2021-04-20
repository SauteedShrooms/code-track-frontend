import React from 'react'
import { Image, Grid, Item, Header } from 'semantic-ui-react'


const Profile = () => {

  let user = JSON.parse(window.localStorage.getItem("user"))

  return(
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header>
            {user.name}
          </Header>
          <Image>{user.avatar}</Image>
          <Item>Age: {user.age}</Item>
          <Item>Email: {user.email}</Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Profile;
