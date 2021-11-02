import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './Button'
import Input from './Input'

class Form extends Component {
  render() {

    const { onChangeMail, onChangePassword, onChangeRememberMe, onChangeFirstName, onChangeLastName, onSubmit, emailIsValid, passwordIsValid } = this.props

    return (
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label me-3">
            First Name
            <Input type="text" onChange={onChangeFirstName} />
          </label>
          <label className="form-label">
            Last Name 
            <Input type="text" onChange={onChangeLastName} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label me-3">
            Email address 
            <Input type="email" onChange={onChangeMail} isValid={emailIsValid} />
          </label>
          <label className="form-label">
            Password 
            <Input type="password" onChange={onChangePassword} isValid={passwordIsValid} />
          </label>
        </div>
        <div className="form-check my-2">
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