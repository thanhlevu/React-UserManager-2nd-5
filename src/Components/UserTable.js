import React, { Component } from "react";
import User from "./User";
class UserTable extends Component {
  searchUser() {
    this.props.dataUser.forEach(userX => {
      if (userX.name.toLowerCase().includes(this.props.keyx.toLowerCase())) {
        return <User key={userX.id} user={userX} />;
      } else return;
    });
  }

  render() {
    return (
      <div className="col">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Grant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataUser
              .filter(userX =>
                userX.name.toLowerCase().includes(this.props.keyx.toLowerCase())
              )
              .map((userX, i) => {
                return (
                  <User
                    deleteUser={id => this.props.deleteUser(id)}
                    onEdittingProp={this.props.onEdittingProp}
                    editUser={user => this.props.editUser(user)}
                    onEditStatus={() => this.props.onEditStatus()}
                    key={i}
                    user={userX}
                    no={i+1}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
