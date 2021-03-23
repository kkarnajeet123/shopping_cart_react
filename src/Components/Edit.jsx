import React, { Component } from "react";
import UserService from "../Services/UserService/UserService";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.id,
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      phoneNumber: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.editUserInfo = this.editUserInfo.bind(this);
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
      });
    });
  }

  editUserInfo = (event) => {
    event.preventDefault();
    let user = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      phoneNumber: this.state.phoneNumber,
    };
    console.log("user=> " + JSON.stringify(user));
    console.log("id=> " + JSON.stringify(this.state.userId));
    UserService.updateUsersInfo(user, this.state.userId).then((res) => {
      this.props.history.push("/users");
    });
  };

  cancel() {
    this.props.history.push("/list");
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
  changeDateOfBirthHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
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
                    <div>
                      <h3
                        id="userInfoLine"
                        style={{
                          marginTop: -30,
                          backgroundColor: "royalblue",
                          color: "thistle",
                        }}
                      >
                        Update User Information
                      </h3>
                      <h6 id="inlineStyle" style={{ marginTop: -4 }}>
                        ________________________________________________________________
                      </h6>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-2.2">
                        <label>User Id</label>
                        <input
                          readOnly
                          type="text"
                          className="form-control"
                          name="firstName"
                          placeholder="First Name"
                          value="userID"
                        />
                      </div>
                    </div>

                    <div
                      className="form-row"
                      style={{
                        marginLeft: -10,
                        marginRight: -480,
                      }}
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
                      style={{
                        float: "center",
                        marginTop: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <button
                        className="btn btn-success"
                        onSubmit={this.editUserInfo}
                      >
                        Register
                      </button>
                      <button
                        className="btn btn-danger"
                        onSubmit={this.cancel.bind(this)}
                        style={{ marginLeft: "10px" }}
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

export default Edit;
