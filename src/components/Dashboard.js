import React from 'react';
import { connect } from 'react-redux';
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.full_name}</h2>
        <h3>Here is your Secret:</h3>
        <p>Message: {this.props.message}</p>
        <span>Email: {this.props.email}</span>
      </div>
    )
  }
}

export default connect(({email, full_name, message}) => ({email, full_name, message}))(Dashboard)
