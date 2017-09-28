import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input name='email' />
          <label>Password</label>
          <input name='password' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
