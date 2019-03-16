import React, {Component} from 'react'
import {CurrentUserConsumer} from '../context/CurrentUser.context'

const {createApolloFetch} = require('apollo-fetch')

const fetch = createApolloFetch({
  uri: 'http://localhost:4000/graphql'
})

class First extends Component {
  state = {
    usersCount: 0
  }
  componentDidMount() {
    fetch({
      query: '{ users { id, name }}'
    }).then(res => {
      console.log(res)
      this.setState({ usersCount: res.data.users.length})
    })
  }
  
  render() {
    return (
      <div>
        U count {this.state.usersCount}
        
        <CurrentUserConsumer>
          {({logout}) => (
            <button onClick={logout}>Wyloguj</button>
          )}
        </CurrentUserConsumer>
      </div>
    )
  }
}

export default First