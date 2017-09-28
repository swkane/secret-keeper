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

  handleName = (e) => (this.setState({name: e.target.value}))
  handleEmail = (e) => (this.setState({email: e.target.value}))
  handlePassword = (e) => (this.setState({password: e.target.value}))
  handleMessage = (e) => (this.setState({message: e.target.value}))

  render() {
    return (
      <div>
        <h2>Register</h2>
          <label>Name</label>
          <input onChange={this.handleName} value={this.state.name} name='name' />
          <label>Email</label>
          <input onChange={this.handleEmail} value={this.state.email} name='email' />
          <label>Password</label>
          <input onChange={this.handlePassword} value={this.state.password} name='password' />
          <label>Message</label>
          <textarea onChange={this.handleMessage} value={this.state.message} name='message' />
          <button onClick={this.props.fetchRegister}>Submit</button>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   name: state.name,
//   email: state.email,
//   password: state.password,
//   message: state.message
// })

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRegister }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);
