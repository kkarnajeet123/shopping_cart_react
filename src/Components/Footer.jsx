import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <h6>&#169; 2021 thepustkari.com All Rights Reserved</h6>
        <ul>
          <li>
            <a href="/home">Home Page</a> |
          </li>
          <li>
            <a href="/about">About Company</a> |
          </li>

          <li>
            <a href="index2.html">Services</a> |
          </li>
          <li>
            <a href="index2.html">Reviews</a> |
          </li>

          <li>
            <a href="index2.html">Contact us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
