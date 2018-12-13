import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-background">
        <div className="wrapper-signup">
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit} className="signup-form-box">
              <div className="form-type-signup">
                Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
              </div>
              <div className="signup-form">
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="signup-input"
                    placeholder="Username"
                  />
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="signup-input"
                    placeholder="Email"
                  />
                  <input type="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signup-input"
                    placeholder="Password"
                  />
                <input className="signup-submit" type="submit" value={this.props.formType} />
              </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

//possible future auth stuff

// const matchPassword = (value, allValues) =>
// value !== allValues.password
//   ? `This field must match with your password field`
//   : undefined;


// this.checkPassword = this.checkPassword.bind(this);
//  checkPassword(){
//     if (document.getElementById('password').value ===
//             document.getElementById('confirm_password').value) {
//         document.getElementById('password').onChange={update('password')};
//     } else {
//         document.getElementById('submit').disabled = true;
//     }
// }

// <label>Confirm Password:
//   <input type="password"
//     id='confirm_password'
//     value={this.state.password}
//     onChange={this.checkPassword}
//     className="signup-input"
//   />
// </lab

export default withRouter(SignUpForm);
