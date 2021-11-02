import React, { Component } from 'react';

class Success extends Component {
  render() {

    const { email } = this.props

    return (
      <div>
        <p>Form Submitted</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default Success;