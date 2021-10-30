import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';


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
		} else {
			this.setState({ emailIsValid: false })
		}
	}

  handlePasswordChange = (e) => {
		this.setState({ password: e.target.value })

		if (e.target.value.length > 5) {
			this.setState({ passwordIsValid: true })
		} else {
			this.setState({ passwordIsValid: false })
		}
	}

	handleRememberMe = (e) => {
		console.log(e)
		if (e.target.checked) {
			this.setState({ rememberMe: true })
		} else {
			this.setState({ rememberMe: false })
		}
  }

	onSubmit = (e) => {
		e.preventDefault()

		if (this.state.emailIsValid && this.state.passwordIsValid) {
			this.setState({ isSubmitted: true })
		}
	}

  render() {
    return (
      <>
        <div>
          <h1 className="m-3">Login</h1>
        </div>
				{ this.isSubmitted === true ? 
					<div>
						<p>Form Submitted</p>
					</div> :
					<Form  onSubmit={this.onSubmit}  onChangeMail={this.handleEmailChange}  onChangePassword={this.handlePasswordChange}  onChangeRememberMe={this.handleRememberMe} />
				}

      </>
    );
  }
}

export default App;
