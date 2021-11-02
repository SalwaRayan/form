import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import Success from './components/Success'


class App extends React.Component {
  constructor() {
    super()

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			rememberMe: false,
			emailIsValid: false,
			passwordIsValid: false,
			isSubmitted: false,
		}
  }

  handleEmailChange = (e) => {
		const { value } = e.target
		const regex = /[\w\\.]+@([\w-]+\.)+[\w-]{2,4}$/
		const result = regex.test(value)

			this.setState({ 
				email: value, 
				emailIsValid: result 
			})

		// if (result) {
		// 	this.setState({ email: str, emailIsValid: true })
		// } else {
		// 	this.setState({ email: str, emailIsValid: false })
		// }
	}

  handlePasswordChange = (e) => {
		const { value } = e.target

		this.setState({ 
			password: value,
			passwordIsValid: value.length > 5
		})

		// if (value.length > 5) {
		// 	this.setState({ 
		// 		password: value, 
		// 		passwordIsValid: true 
		// 	})
		// } else {
		// 	this.setState({ 
		// 		password: value, 
		// 		passwordIsValid: false 
		// 	})
		// }
	}

	handleRememberMe = (e) => {
		const { checked } = e.target

		this.setState({ remeberMe: checked })

		// if (e.target.checked) {
		// 	this.setState({ rememberMe: true })
		// } else {
		// 	this.setState({ rememberMe: false })
		// }
  }

	onSubmit = (e) => {
		e.preventDefault()
		
		this.setState({ isSubmitted: this.state.emailIsValid && this.state.passwordIsValid })

		// if (this.state.emailIsValid && this.state.passwordIsValid) {
		// 	this.setState({ isSubmitted: true })
		// }
	}

	handleFirstName = (e) => {
		const { value } = e.target
		
		this.setState({ firstName: value })
	}

	handleLastName = (e) => {
		const { value } = e.target

		this.setState({ lastName: value })
	}


  render() {
    return (
      <div className="container">
        <div>
          <h1 className="m-3">Login</h1>
        </div>
				<div>
					{ this.state.isSubmitted === true ? 
						<Success email={this.state.email}/>
						:
						<Form  
							onSubmit={this.onSubmit}  
							onChangeMail={this.handleEmailChange}  
							onChangePassword={this.handlePasswordChange}  
							onChangeRememberMe={this.handleRememberMe} 
							onChangeFirstName={this.handleFirstName} 
							onChangeLastName={this.handleLastName}
							emailIsValid={this.state.emailIsValid}
							passwordIsValid={this.state.passwordIsValid}
						/>
					}
				</div>
      </div>
    );
  }
}

export default App;
