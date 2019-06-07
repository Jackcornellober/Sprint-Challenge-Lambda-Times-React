import React, { Component } from 'react';
import withAuthenticate from './components/authentication/withAuthenticate'
import App1 from './App1'
import Login from './components/Login'

const ComponentFromWithAuthenticate = withAuthenticate(App1)(Login);

class App extends React.Component {

  login = (userName, password) => {
    localStorage.setItem('username', userName);
  }

  logout = () => {
    localStorage.setItem('username', '')
    window.location.reload()
  }

  render() {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate logout = {this.logout} login = {this.login}/>
    </div>
  );
  }
}

export default App;
