import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./RegisterForm.css";
import { withRouter } from "react-router-dom";
import UserService from "../Services/UserService/UserService";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      midlleName: "",
      lastName: "",
      dob: "",
      phoneNumber: "",
      email: "",
      password: "",
      status: "status",
      role: 3,
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.addUserInfo = this.addUserInfo.bind(this);
    this.cancelUserInfo = this.cancelUserInfo.bind(this);
  }
  addUserInfo = (event) => {
    event.preventDefault();
    let user = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      status: this.state.status,
      role: this.state.role,
    };
    console.log(
      "The userInfo printing form user array is: " + JSON.stringify(user)
    );
    alert(
      "The user info is: " +
        this.state.firstName +
        " " +
        this.state.middleName +
        " " +
        this.state.lastName +
        "" +
        this.state.dob +
        "" +
        this.state.phoneNumber +
        "" +
        this.state.email +
        "" +
        this.state.password +
        "" +
        this.state.status +
        "" +
        this.state.role
    );
    UserService.addUsersInfo(user).then((res) => {
      this.props.history.push("/list");
    });
  };

  cancelUserInfo = (event) => {
    event.preventDefault();
    alert("Re-routing to List");
    this.props.history.push("/list");
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeMiddleNameHandler = (event) => {
    this.setState({ middleName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeDobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="container vertical-center">
          <div className="panel">
            <div className="panel-default">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <form className="form-horizontal">
                    <div
                      className="jumbotron"
                      style={{
                        width: 650,
                        height: 450,
                        marginLeft: 200,
                        marginRight: 350,
                        marginTop: 20,
                      }}
                    >
                      <h5 className="text-center">ADD USER-INFO</h5>
                      <div
                        className="form-row"
                        style={{ marginLeft: -10, marginRight: -480 }}
                      >
                        <div
                          className="form-group col-md-2"
                          style={{ marginLeft: 12 }}
                        >
                          <label>First Name</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            className="form-corntrol "
                            value={this.state.firstName}
                            onChange={this.changeFirstNameHandler}
                          />
                        </div>
                        <div
                          className="form-group col-md-2"
                          style={{ marginLeft: 18 }}
                        >
                          <label>Middle Name</label>
                          <input
                            type="text"
                            placeholder="Middle Name"
                            name="middleName"
                            className="form-corntrol"
                            value={this.state.middleName}
                            onChange={this.changeMiddleNameHandler}
                          />
                        </div>
                        <div
                          className="form-group col-md-2"
                          style={{ marginLeft: 18 }}
                        >
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-corntrol"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.changeLastNameHandler}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label>Date of Birth</label>
                          <input
                            type="date"
                            className="form-corntrol"
                            name="dob"
                            placeholder="DOB"
                            value={this.state.dob}
                            onChange={this.changeDobHandler}
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-corntrol"
                            name="phoneNumber"
                            placeholder="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.changePhoneNumberHandler}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-corntrol"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.changeEmailHandler}
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-corntrol"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.changePasswordHandler}
                          />
                        </div>
                      </div>

                      <Button
                        className="btn btn-success float:right"
                        style={{ marginLeft: -380, marginTop: 25 }}
                        onClick={this.addUserInfo}
                      >
                        Register
                      </Button>
                      <Button
                        className="btn btn-danger float:right"
                        style={{ marginTop: 25, marginLeft: 20 }}
                        onClick={this.cancelUserInfo}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
