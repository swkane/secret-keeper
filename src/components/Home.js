import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Got Secrets?</h1>
        <Link to='/register'><button>Regster</button></Link>
        <Link to='/login'><button>Log Back In</button></Link>
      </div>
    )
  }
}
