import React, { Component } from "react";
import UserService from "../Services/UserService/UserService";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.userId,
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      phoneNumber: "",
      email: "",
      password: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.cancelUserInfo = this.cancelUserInfo.bind(this);
  }

  componentDidMount() {
    UserService.getUserById(this.state.userId).then((res) => {
      let user = res.data;
      this.setState({
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        dob: user.dob,
        phoneNumber: user.phoneNumber,
        email: user.email,
        password: user.password,
      });
    });
  }

  updateUserInfo = (event) => {
    event.preventDefault();
    let user = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("user=> " + JSON.stringify(user));
    console.log("id=> " + JSON.stringify(this.state.userId));
    // UserService.updateUsersInfo(user, this.state.userId).then((res) => {
    //   this.props.history.push("/list");
    // });
  };

  cancelUserInfo = (event) => {
    event.preventDefault();
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
  changeDateOfBirthHandler = (event) => {
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
                    <div className="jumbotron">
                      <h5 className="updateHeading" style={{}}>
                        UPDATE USER-INFO
                      </h5>
                      <div
                        className="form-group col-md-2"
                        style={{ marginLeft: 12 }}
                      >
                        <input
                          style={{ marginLeft: -20 }}
                          type="text"
                          placeholder="UserId"
                          name="userId"
                          className="form-corntrol "
                          value={this.state.userID}
                          readOnly={this.state.userId}
                        />
                      </div>
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
                            style={{ marginLeft: 5 }}
                          />
                        </div>
                        <div className="form-group col-md-3">
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
                        onClick={this.updateUserInfo}
                      >
                        Update
                      </Button>
                      <Button
                        className="btn btn-danger float:right"
                        style={{ marginTop: 25, marginLeft: 10 }}
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

export default withRouter(Edit);
