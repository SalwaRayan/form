import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Input from './components/Input'

class App extends React.Component {
  constructor() {
    super()

		this.state = {
			email: "",
			password: "",
			rememberMe: false,
			emailIsValid: false,
			passwordIsValid: false,
			isSubmitted: false,
		}
  }

  handleEmailChange = (e) => {
		let str = e.target.value
		const regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)

		this.setState({ email: str })

		if (regex) {
			this.setState({ emailIsValid: true })
		}
	}

  handlePasswordChange = (e) => {
		this.setState({ password: e.target.value })

		if (e.target.value.length > 5) {
			this.setState({ passwordIsValid: true })
		}
	}

	handleRememberMe = () => {
		this.setState({ rememberMe: true })
	}

	onSubmit = (e) => {
		e.preventDefault()
	}

  render() {
    return (
      <>
        <div>
          <h1>Login</h1>
        </div>
				<form>
          <label>
				  	Email address 
					  <Input type="email" onChange={this.handleEmailChange} />
				  </label>
          <label>
				  	Password 
					  <Input type="password" onChange={this.handlePasswordChange} />
				  </label>
          <div>
            <Input type="checkbox" onChange={this.handleRememberMe} />
            <p>Remember Me</p>
          </div>
          <Button onSubmit={this.onSubmit} />
				</form>

      </>
    );
  }
}

export default App;
