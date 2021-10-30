import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

class Button extends Component {
  render() {

    const { onSubmit } = this.props

    return (
      <button submit={onSubmit} className="btn btn-primary ms-3">Submit</button>
    );
  }
}

export default Button;