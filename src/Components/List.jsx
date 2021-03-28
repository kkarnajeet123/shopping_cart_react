import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UserService from "../Services/UserService/UserService";
import { withRouter } from "react-router-dom";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.editUserInfo = this.editUserInfo.bind(this);
    this.deleteUserInfo = this.deleteUserInfo.bind(this);
    this.addUserInfo = this.addUserInfo.bind(this);
  }
  addUserInfo() {
    this.props.history.push("/register");
  }

  editUserInfo = (userId) => {
    // alert("The userId is: " + userId);
    // window.confirm(userId);
    this.props.history.push(`/edit-userInfo/${userId}`);
  };

  componentDidMount() {
    UserService.getUsersList().then((res) => {
      this.setState({ users: res.data });
    });
  }
  deleteUserInfo = (userId) => {
    if (
      window.confirm(
        "WARNING!!!" +
          "The user information with userId " +
          userId +
          " will be deleted from the list!!!"
      )
    ) {
      UserService.deleteUsersInfo(userId).then((res) => {
        this.props.history.push("/list");
      });
    }
  };

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "transparent" }}>
          <h1
            className="text-ceneter"
            style={{ color: "midnightblue", fontWeight: "bold" }}
          >
            {" "}
            User Information List
          </h1>
          <div style={{ float: "left", marginLeft: "10px" }}>
            <Button onClick={this.addUserInfo} className="btn btn-success">
              Add User
            </Button>
            <label
              className="Search-Box"
              style={{ textAlign: "center", marginRight: "920px" }}
            />
            Search:
            <input type="text" style={{ marginLeft: 5 }}></input>
          </div>

          <div className="table-box">
            <table
              cellPadding="10"
              className="col-xs-7 table-bordered table-striped table-condensed table-fixed"
            >
              <thead>
                <tr>
                  <td>UserId</td>
                  <td>First Name</td>
                  <td>Middle Name</td>
                  <td>Last Name</td>
                  <td>DOB</td>
                  <td>Status</td>
                  <td>Phone</td>
                  <td>Email</td>
                  <td>Password</td>
                  <td>Role Name</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.firstName}</td>
                    <td>{user.middleName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.dob}</td>
                    <td>{user.status}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.authentication.username}</td>
                    <td>{user.authentication.password}</td>
                    <td>{user.role.roleName}</td>
                    <td>
                      <a href="/Edit">
                        <button
                          style={{
                            color: "black",
                            border: "1.5px solid",
                            marginLeft: 10,
                          }}
                          onClick={() => {
                            this.editUserInfo(user.userId);
                          }}
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                      </a>
                      <button
                        style={{
                          color: "black",
                          border: "1.5px solid",
                        }}
                        onClick={() => {
                          this.deleteUserInfo(user.userId);
                        }}
                        className="btn btn-danger m-1"
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(List);
