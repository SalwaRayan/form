import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

class Input extends Component {
  render() {

    const { type, onChange, isValid } = this.props

    return (
      <>
        {type === "checkbox" ? 
          <input type={type} onChange={onChange} className="me-3"/> :
          <input type={type} onChange={onChange} className={isValid ? 'form-control is-valid' : 'form-control is-invalid'} id="validationTextarea" required />
        }
      </>
    );
  }
}

export default Input;