import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './Button'
import Input from './Input'

class Form extends Component {
  render() {

    const { onChangeMail, onChangePassword, onChangeRememberMe, onChangeFirstName, onChangeLastName, onSubmit } = this.props

    return (
      <form onSubmit={onSubmit} className="was-validated" >
        <div className="mb-3">
          <label className="form-label ms-3">
            First Name
            <Input type="text" onChange={onChangeFirstName} />
          </label>
          <label className="form-label ms-3">
            Last Name 
            <Input type="text" onChange={onChangeLastName} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label ms-3">
            Email address 
            <Input type="email" onChange={onChangeMail} />
          </label>
          <label className="form-label ms-3">
            Password 
            <Input type="password" onChange={onChangePassword} />
          </label>
        </div>
        <div className="form-check my-3">
          <label>
            <Input type="checkbox" onChange={onChangeRememberMe} />
            Remember Me
          </label>
        </div>
        <Button/>
      </form>
    );
  }
}

export default Form;