import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UserService from "../Services/UserService/UserService";
import { withRouter } from "react-router-dom";

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
    alert("The userId is: " + userId);

    // window.confirm(userId);
    this.props.history.push(`/edit/${userId}`);
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
      // UserService.deleteUsersInfo(userId).then((res) => {
      //   // window.location.href = "/list";
      //   this.props.history.push("/list");
      // });
    }
    window.confirm("The userId: " + this.state.userId + " has been deleted!!!");
  };

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "transparent" }}>
          <h1 className="text-ceneter" style={{ color: "darkred" }}>
            {" "}
            User List
          </h1>
          <div style={{ float: "left" }}>
            <Button
              onClick={this.addUserInfo}
              style={{
                color: "black",
                border: "1px solid",
                backgroundColor: "slateblue",
              }}
              className="btn btn-success m-2"
            >
              Add User
            </Button>
            <label style={{ marginRight: 890 }} />
            Search:
            <input type="text" style={{ marginLeft: 5 }}></input>
          </div>

          <table
            id="dtVerticalScroll"
            className="table table-bordered table-striped table-sm"
            cellSpacing="0"
            width="100%"
            style={{ backgroundColor: "olive" }}
          >
            <thead style={{ backgroundColor: "darkgray" }}>
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
                        style={{ color: "black", border: "1.5px solid" }}
                        onClick={() => {
                          this.editUserInfo(user.userId);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                    </a>
                    <button
                      style={{ color: "black", border: "1.5px solid" }}
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
    );
  }
}

export default withRouter(List);
