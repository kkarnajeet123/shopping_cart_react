import React, { Component } from "react";
import "./RegisterForm.css";
import UserService from "../Services/UserService/UserService";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.id,
      //match.params.userId,
      firstName: "",
      middleName: "",
      lastName: "",
      phoneNumber: "",
      dob: "",
      email: "",
      password: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.userId === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.userId).then((res) => {
        let user = res.data;
        this.setState({
          firstName: user.firstName,
          middleName: user.middleName,
          lastName: user.lastName,
          dob: user.dob,
          phoneNumber: user.phoneNumber,
        });
      });
    }
  }

  saveUserInfo = (e) => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      dob: this.state.dob,
      username: this.state.email,
      password: this.state.password,
      role: 3,
      status: "active",
    };

    console.log("user=>" + JSON.stringify(user));
    alert("UserInfo has been registered!!");

    if (this.state.userId === "_add") {
      UserService.addUsersInfo(user).then((res) => {
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUsersInfo(user, this.state.userId).then((res) => {
        this.props.history.push("/users");
      });
    }
  };
  //window.location.href = "/login";
  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  }
  cancel() {
    this.props.history.push("/user");
    console.log(this.props);
    //  window.location.href = "/list";
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeMiddleNameHandler = (event) => {
    this.setState({ middleName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  changeDateOfBirthHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div style={{ width: 100 }}>
        <div></div>
        <div className="container">
          <div className="panel">
            <div className="panel-default">
              <div className="row">
                <form className="form-horizontal">
                  <div
                    className="jumbotron"
                    style={{
                      width: 500,
                      height: 450,
                      marginLeft: 350,
                      marginRight: 350,
                      marginTop: 20,
                    }}
                  >
                    {this.getTitle()}
                    <h6 id="inlineStyle">
                      ________________________________________________________________
                    </h6>
                    <div
                      className="form-row"
                      style={{ marginLeft: -10, marginRight: -480 }}
                    >
                      <div className="form-group col-md-2">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          placeholder="First Name"
                          value={this.state.firstName}
                          onChange={this.changeFirstNameHandler}
                        />
                      </div>
                      <div className="form-group col-md-2">
                        <label>Middle Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="middleName"
                          placeholder="Middle Name"
                          value={this.state.middleName}
                          onChange={this.changeMiddleNameHandler}
                        />
                      </div>
                      <div className="form-group col-md-2">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          placeholder="Last Name"
                          value={this.state.lastName}
                          onChange={this.changeLastNameHandler}
                        />
                      </div>
                    </div>
                    <div
                      className="form-row"
                      style={{ marginLeft: -10, marginRight: -480 }}
                    >
                      <div className="form-group col-md-2.5">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={this.state.phoneNumber}
                          onChange={this.changePhoneNumberHandler}
                        />
                      </div>
                      <div className="form-group col-md-2.5">
                        <label>Date Of Birth</label>
                        <input
                          type="Date"
                          name="dob"
                          className="form-control"
                          placeholder="Date of Birth"
                          value={this.state.dob}
                          onChange={this.changeDateOfBirthHandler}
                        />
                      </div>
                    </div>
                    <div
                      className="form-row"
                      style={{ marginLeft: -10, marginRight: -480 }}
                    >
                      <div className="form-group col-md-2.5">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="username"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.changeEmailHandler}
                        />
                      </div>
                      <div className="form-group col-md-2.5">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.changePasswordHandler}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        float: "center",
                        marginTop: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <button
                        type="submit"
                        className="btn btn-success"
                        onSubmit={this.saveUserInfo}
                      >
                        Register
                      </button>
                      <button
                        className="btn btn-danger m-2 right"
                        onClick={this.cancel.bind(this)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
