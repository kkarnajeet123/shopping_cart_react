import React, { Component } from "react";
import "../Components/Login.css";
import UserService from "../Services/UserService/UserService";
import { withRouter } from "react-router-dom";
import Cookie from "universal-cookie";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: [],
      username: "",
      password: "",
      accessToken: "",
    };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.userSignIn = this.userSignIn.bind(this);
  }

  componentDidMount() {
    // UserService.getToken(this.state.username, this.state.password).then(
    //   (res) => {
    //     console.log(JSON.stringify(res));
    //   }
    // );
  }

  userSignIn(event) {
    event.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    console.log("The username and password is: " + JSON.stringify(user));
    //alert("The username and password is: " + JSON.stringify(user));

    UserService.getToken(user).then((res) => {
      const Token = res.data;
      const jwtToken = JSON.stringify(Token);
      const len = jwtToken.length;
      const accessToken = jwtToken.substring(7, len - 1);

      // console.log("The jwtToken is: " + JSON.stringify(jwtToken));
      console.log("The accessToken is: " + accessToken);
      // Cookie.set(accessToken);
      const cookie = new Cookie();
      cookie.set("accessToken", accessToken, { path: "/" });
      console.log("The cookie sent token is: " + accessToken);
      this.props.history.push("/list");
    });
  }

  componentDidUpdate;

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  // getLocalProfile(callback) {
  //   var profileImgSrc = localStorage.getItem("PROFILE_IMG_SRC");
  //   var profileName = localStorage.getItem("PROFILE_NAME");
  //   var profileReAuthEmail = localStorage.getItem("PROFILE_REAUTH_EMAIL");

  //   if (
  //     profileName !== null &&
  //     profileReAuthEmail !== null &&
  //     profileImgSrc !== null
  //   ) {
  //     callback(profileImgSrc, profileName, profileReAuthEmail);
  //   }
  // }

  render() {
    return (
      <div className="container">
        <div className="card card-container">
          <img
            id="profile-img"
            className="profile-img-card"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <p id="profile-name" className="profile-name-card"></p>
          <form className="form-signin">
            <span id="reauth-email" className="reauth-email"></span>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              onChange={this.usernameChangeHandler}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              onChange={this.passwordChangeHandler}
            />
            <div
              id="remember"
              className="checkbox"
              style={{ textAlign: "left" }}
            >
              <label style={{ color: "darkblue", fontStyle: "italic" }}>
                <input type="checkbox" value="remember-me" />
                <a className="m-2">Remember me</a>
              </label>
            </div>
            <button
              onClick={this.userSignIn}
              className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
            >
              Sign in
            </button>
          </form>
          <a href="/forgetPassword" className="forgot-password">
            Forgot the password?
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
