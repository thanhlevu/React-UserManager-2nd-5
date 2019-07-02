import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onEdit: false
    };
  }

  changeState() {
    this.setState({
      onEdit: !this.state.onEdit
    });
  }

  onEdit() {
    if (!this.state.onEdit) {
      return (
        <div
          className="btn btn-warning edit"
          onClick={user => {
            this.props.onEditStatus();
            this.props.editUser(this.props.user);
          }}
        >
          <i className="fa fa-edit    " />
          Edit
        </div>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.no}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.phone}</td>
        <td>{this.props.user.grant}</td>
        <td>
          <div className="btn-group">
            <div
              className="btn btn-warning edit"
              onClick={user => {
                this.props.onEditStatus();
                this.props.editUser(this.props.user);
              }}
            >
              <i className="fa fa-edit    " />
              Edit
            </div>
            <div className="btn btn-danger edit" onClick={(id)=>this.props.deleteUser(this.props.user.id)}>
              <i className="fa fa-delete    " />
              Delete
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default User;
