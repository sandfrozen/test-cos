import React, {Component} from 'react'

const CurrentUserContext = React.createContext()

export class CurrentUserProvider extends Component {
  state = {
    user: null,
    processing: true,
    error: null
  }
  
  componentDidMount() {
    try {
      const jsonUser = JSON.parse(localStorage.getItem('user'))
      
      this.setState({
        user: jsonUser,
        processing: false
      })
    } catch (e) {
      console.error(e)
      this.setState({
        processing: false
      })
    }
  }
  
  getUser = async (mail, password) => {
  
  }
  
  login = (mail, password) => {
    this.setState({
      processing: true
    })
    // get mail and password and return name and id and session key
    // this.getUser(mail, password)
    
    setTimeout(() => {
      this.setState({
        user: {name: 'Tomek', id: 'u1'},
        processing: false
      }, () => {
        localStorage.setItem('user', JSON.stringify(this.state.user))
      })
    }, 1000)
    
  }
  
  logout = () => {
    this.setState({user: null, processing: false, error: null}, () =>
      localStorage.setItem('user', null)
    )
  }
  
  render() {
    const {children} = this.props
    return (
      <CurrentUserContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          user: this.state.user,
          processing: this.state.processing,
          error: this.state.error
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    )
  }
}

export const CurrentUserConsumer = CurrentUserContext.Consumer
