import React, { Component } from 'react';

class Success extends Component {
  render() {

    const { email } = this.props

    return (
      <div>
        <p className="text-success text-center pt-5 fs-1">Form Submitted</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default Success;