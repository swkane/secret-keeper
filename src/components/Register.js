import React from 'react';
// import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <label>Name</label>
          <input name='name' />
          <label>Email</label>
          <input name='email' />
          <label>Password</label>
          <input name='password' />
          <label>Message</label>
          <textarea name='message' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
