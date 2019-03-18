import React, {Component} from 'react'
import {CurrentUserConsumer} from '../context/CurrentUser.context'

const {createApolloFetch} = require('apollo-fetch')

const fetch = createApolloFetch({
  uri: '/graphql'
})

class First extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch({
      query: '{ users { id, name }}'
    }).then(res => {
      console.log(res)
      this.setState({ users: res.data.users })
    }).catch(e => {
	console.log(e)
	this.setState({users: []})
    })
  }
  
  render() {
    return (
      <div>
        U count {this.state.users.length}
        
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
