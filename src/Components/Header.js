import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-3">User Manager - JSON</h1>
          <p className="lead">Add - Edit - Delete User</p>
          <hr className="my-2" />
        </div>
      </div>
    );
  }
}

export default Header;
