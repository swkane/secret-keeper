import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <img src={logo} className="App-logo" alt="logo" />
              <NavLink to='/dashboard'>Dashboard</NavLink>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink to='/register'>Register</NavLink>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/logout'>Logout</NavLink>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
