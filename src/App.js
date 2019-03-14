import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import First from './components/First'
import {CurrentUserProvider, CurrentUserConsumer} from './context/CurrentUser.context.js'


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <CurrentUserConsumer>
        {({user}) =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: props.location}
              }}
            />
          )
        }
      </CurrentUserConsumer>
    )}
  />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <CurrentUserProvider>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <PrivateRoute path='/' component={First}/>
            </Switch>
          </CurrentUserProvider>
      </BrowserRouter>
    )
  }
}

export default App
