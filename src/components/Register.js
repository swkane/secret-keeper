import React from 'react';
import {fetchRegister} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Register extends React.Component {
  state = {
      name: '',
      email: '',
      password: '',
      message: ''
  }
  handle = field => e => this.setState({[field]: e.target.value})

  render() {
    return (
      <div>
        <h2>Register</h2>
          <label>Name</label>
          <input type='text' onChange={this.handle('name')} value={this.state.name} name='name' />
          <label>Email</label>
          <input onChange={this.handle('email')} value={this.state.email} name='email' />
          <label>Password</label>
          <input onChange={this.handle('password')} value={this.state.password} name='password' />
          <label>Message</label>
          <textarea onChange={this.handle('message')} value={this.state.message} name='message' />
          <button onClick={() => this.props.fetchRegister(this.state.name, this.state.email, this.state.password, this.state.message)}>Submit</button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRegister }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);
