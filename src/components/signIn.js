import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "../actions/signIn";
function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}
class SignIn extends React.Component {
  state = {
    device: "",
    deviceValid: false,
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    formValid: false,
    errorMsg: {},
  };

  validateForm = () => {
    const { deviceValid, emailValid, passwordValid } = this.state;
    this.setState({
      formValid: deviceValid && emailValid && passwordValid,
    });
  };

  updateDeviceName = (device) => {
    this.setState({ device }, this.validateDeviceName);
  };

  validateDeviceName = () => {
    const { device } = this.state;
    let deviceValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (device.length < 3) {
      deviceValid = false;
      errorMsg.device = "Must be at least 3 characters long";
    }

    this.setState({ deviceValid, errorMsg }, this.validateForm);
  };

  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = "Invalid email format";
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  updatePassword = (password) => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = "Password must be at least 6 characters long";
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMsg.password = "Password must contain a digit";
    } else if (!/[!@#$%^&*]/.test(password)) {
      passwordValid = false;
      errorMsg.password = "Password must contain special character: !@#$%^&*";
    }

    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  signIn() {
    this.props
      .logIn(this.state.device, this.state.password, this.state.email)
      .then((data) => {
        this.props.history.push("/dash/borad");
      });
  }
  render() {
    if (this.props.User.fetching) {
      return <h1>Loading....</h1>;
    } else if (this.props.User.fetched) {
      return <h1>null</h1>;
    } else if (this.props.User.error) {
      return <h1>Error</h1>;
    } else {
      return (
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h1>Sign In</h1>
            <ValidationMessage
              valid={this.state.deviceValid}
              message={this.state.errorMsg.device}
            />
            <input
              type="text"
              className="form-control"
              value={this.state.device}
              placeholder="device"
              onChange={(e) => this.updateDeviceName(e.target.value)}
            />
            <br />
            <ValidationMessage
              valid={this.state.emailValid}
              message={this.state.errorMsg.email}
            />
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              placeholder="email"
              onChange={(e) => this.updateEmail(e.target.value)}
            />
            <br />
            <ValidationMessage
              valid={this.state.passwordValid}
              message={this.state.errorMsg.password}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={this.state.password}
              onChange={(e) => this.updatePassword(e.target.value)}
            />
            <br />
            <ValidationMessage
              valid={this.state.passwordConfirmValid}
              message={this.state.errorMsg.passwordConfirm}
            />
            <br />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!this.state.formValid}
              onClick={(e) => this.signIn(e)}
            >
              login
            </button>
          </div>

          <div className="col-md-4"></div>
        </div>
      );
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
