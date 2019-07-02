import React, { Component } from "react";

class AddUserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      phone: "",
      grant: ""
    };
  }

  getNewUser(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  getFormValues(event) {
    var x = document.getElementById("myForm").elements;
    console.log(">/", x);
  }
  showCard() {
    if (this.props.show) {
      return (
        <div className="col">
          <form onChange={event => this.getNewUser(event)} id="myForm">
            <div className="card text-black bg-light mb-3 mt-3">
              <div className="card-header">Add User</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    name="phone"
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
                    required
                  >
                    <option defaultValue>Select grant ...</option>
                    <option value="Admin">Admin</option>
                    <option value="Moderator">Moderator</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="reset"
                    value="Add"
                    className="btn btn-block btn-success float-right"
                    onClick={(name, phone, grant) => {
                      this.props.getNewUserProp(
                        this.state.name,
                        this.state.phone,
                        this.state.grant
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else return;
  }
  render() {
    return <div>{this.showCard()}</div>;
  }
}

export default AddUserCard;
