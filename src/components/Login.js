import React from 'react';
import { fetchLogin, fetchDashboard } from '../actions';
import { connect } from 'react-redux'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handle = field => e => this.setState({[field]: e.target.value})
  handleLogin = () => {
    this.props.dispatch(fetchLogin(this.state.email, this.state.password))
    .then(() => this.props.dispatch(fetchDashboard()));
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
          <label>Email</label>
          <input value={this.state.email} onChange={this.handle('email')} name='email' />
          <label>Password</label>
          <input value={this.state.password} onChange={this.handle('password')} name='password' />
          <button onClick={this.handleLogin} type='submit'>Submit</button>
      </div>
    )
  }
}

export default connect()(Login);
