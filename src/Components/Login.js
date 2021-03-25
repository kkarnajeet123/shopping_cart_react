import React from "react";
import "../Components/Login.css";

function Login() {
  function getLocalProfile(callback) {
    var profileImgSrc = localStorage.getItem("PROFILE_IMG_SRC");
    var profileName = localStorage.getItem("PROFILE_NAME");
    var profileReAuthEmail = localStorage.getItem("PROFILE_REAUTH_EMAIL");

    if (
      profileName !== null &&
      profileReAuthEmail !== null &&
      profileImgSrc !== null
    ) {
      callback(profileImgSrc, profileName, profileReAuthEmail);
    }
  }
  // function loadProfile() {
  //   if (!supportsHTML5Storage()) {
  //     return false;
  //   }
  //   // we have to provide to the callback the basic
  //   // information to set the profile
  //   getLocalProfile(function (profileImgSrc, profileName, profileReAuthEmail) {
  //     //changes in the UI
  //     $("#profile-img").attr("src", profileImgSrc);
  //     $("#profile-name").html(profileName);
  //     $("#reauth-email").html(profileReAuthEmail);
  //     $("#inputEmail").hide();
  //     $("#remember").hide();
  //   });
  // }

  return (
    <div className="container">
      <div className="card card-container">
        <img
          id="profile-img"
          className="profile-img-card"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        />
        <p id="profile-name" class="profile-name-card"></p>
        <form className="form-signin">
          <span id="reauth-email" class="reauth-email"></span>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div id="remember" className="checkbox" style={{ textAlign: "left" }}>
            <label style={{ color: "darkblue", fontStyle: "italic" }}>
              <input type="checkbox" value="remember-me" />
              <a className="m-2">Remember me</a>
            </label>
          </div>
          <button
            class="btn btn-lg btn-primary btn-block btn-signin"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <a href="/forgetPassword" class="forgot-password">
          Forgot the password?
        </a>
      </div>
    </div>
  );
}

export default Login;
