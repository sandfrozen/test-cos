import React, {Component} from 'react'
import {CurrentUserConsumer} from '../context/CurrentUser.context'

const {createApolloFetch} = require('apollo-fetch')

const fetch = createApolloFetch({
  uri: 'http://localhost:4000/graphql'
})

class First extends Component {
  componentDidMount() {
    fetch({
      query: '{ users { id, name }}'
    }).then(res => {
      console.log(res)
    })
  }
  
  render() {
    return (
      <div>
        First
        
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