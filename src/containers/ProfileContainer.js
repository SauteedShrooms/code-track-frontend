import React from 'react'
import Profile from '../components/Profile'
import { Grid, Container, Item, Header, List } from 'semantic-ui-react'


const userData = 'http://localhost:3001/users/'


class ProfileContainer extends React.Component {
   state = {
      users: []

   }

   componentDidMount() {
      fetch(userData)
        .then(res => res.json())
        .then((users) => this.setState({users}))
   }

   render() {
      let user = this.state.users.filter(user => user.id === 1 )
      return(
        <Container>
        <Item.Group>
          <Grid celled>
            <Grid.Row >
              <Grid.Column width={12} id="">
                {/* {user.map(u => <Profile user={u}/>)} */}
              </Grid.Column>
              <Grid.Column width={4} id="" >
                <Header as='h3' textAlign='center'>something</Header>
              <List divided relaxed size='large'>
                {/* {this.state.events.map(event => <Event event={event}/>)} */}
              </List>
              </Grid.Column> 
            </Grid.Row>
          </Grid>
        </Item.Group>
     </Container>
     )
   }   

   
}
