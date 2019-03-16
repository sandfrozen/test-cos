import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {CurrentUserConsumer} from '../context/CurrentUser.context'

class Login extends Component {
  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    return (
      <CurrentUserConsumer>
        {({user, login, processing, error, redirecting}) => (
          <div>
            {user && <Redirect to={from}/>}
            {processing && 'Logowanie...'}
            {!processing &&
            <div>
              
              <button onClick={login}>Zaloguj1.</button>
            </div>
            }
          </div>
        )}
      </CurrentUserConsumer>
    )
  }
}

export default Login