import React, { Component } from "react";
import UserService from "../Services/UserService/UserService";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Edit.css";
import Cookies from "universal-cookie";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      phoneNumber: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.cancelUserInfo = this.cancelUserInfo.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();

    this.token = cookies.get("accessToken");

    //UserService.getUserById(this.state.userId)
    UserService.getUserByIdWithToken(this.state.userId, this.token).then(
      (res) => {
        let user = res.data;
        this.setState({
          userId: user.userId,
          firstName: user.firstName,
          middleName: user.middleName,
          lastName: user.lastName,
          dob: user.dob,
          phoneNumber: user.phoneNumber,
        });
      }
    );
  }

  // displayCurrentUserId() {
  //   alert("The userId is: " + this.state.id);
  //   console.log(this.props);
  // }

  updateUserInfo = (event) => {
    event.preventDefault();
    //alert("The userId is: " + this.state.userId);
    let user = {
      userId: this.state.userId,
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      phoneNumber: this.state.phoneNumber,
      role: 3,
      status: "Y",
    };
    // alert("user=> " + JSON.stringify(user));
    console.log("user=> " + JSON.stringify(user));
    console.log("id=> " + JSON.stringify(this.state.userId));

    //UserService.updateUsersInfo(this.state.userId, user)

    UserService.updateUserInfoWithToken(
      this.state.userId,
      user,
      this.token
    ).then((res) => {
      this.props.history.push("/list");
    });
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
  changeDobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
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
                          className="form-corntrol"
                          value={this.state.userId}
                          readOnly
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
