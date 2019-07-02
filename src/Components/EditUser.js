import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userUpdatedProp.id,
      name: this.props.userUpdatedProp.name,
      phone: this.props.userUpdatedProp.phone,
      grant: this.props.userUpdatedProp.grant
    };
  }

  updateUser(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div className="col-12">
        <form
          onChange={event => this.updateUser(event)}
          id="myForm"
          method="post"
        >
          <div className="card text-white bg-dark mb-3 mt-3">
            <div className="card-header text-center">Update User</div>
            <div className="card-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={
                    this.props.userUpdatedProp
                      ? this.props.userUpdatedProp.name
                      : "name"
                  }
                  required
                  name="name"
                  onChange={event => this.updateUser(event)}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  defaultValue={
                    this.props.userUpdatedProp
                      ? this.props.userUpdatedProp.phone
                      : "tel"
                  }
                  required
                  name="phone"
                  onChange={event => this.updateUser(event)}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Grant
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  name="grant"
                  defaultValue={this.props.userUpdatedProp.grant}
                  onChange={event => this.updateUser(event)}
                  required
                >
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="button"
                  className="btn btn-block btn-warning float-right"
                  value="Save"
                  onClick={info => {
                    this.props.offEditStatus();
                    this.props.getnewUpdate(this.state);
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;
