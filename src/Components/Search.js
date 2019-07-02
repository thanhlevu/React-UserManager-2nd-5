import React, { Component } from "react";
import EditUser from "./EditUser";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  showBtn() {
    if (!this.props.onBtnx) {
      return (
        <div className="btn btn-success" onClick={() => this.props.showCard()}>
          Add New User
        </div>
      );
    } else {
      return (
        <div className="btn btn-danger" onClick={() => this.props.showCard()}>
          Close
        </div>
      );
    }
  }

  onEditting() {
    if (this.props.onEdittingProp) {
      return (
        <EditUser
          getnewUpdate={info => {
            this.props.getnewUpdate(info);
          }}
          userUpdatedProp={this.props.userUpdatedProp}
          offEditStatus={() => this.props.offEditStatus()}
        />
      );
    } else {
      return null;
    }
  }
  onSearch(event) {
    this.key = event.target.value;
    this.setState({
      keyword: event.target.value
    });
  }

  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="form-group col-7">
            <div className="btn-group col" style={{ padding: 0 }}>
              <input
                type="text"
                className="form-control"
                placeholder="enter keywords"
                name="keyword"
                onChange={event => {
                  this.onSearch(event);
                  this.props.onSearchProp(event.target.value);
                }}
              />
              <div
                className="btn btn-info"
                onClick={k => {
                  this.props.onSearchProp(this.key);
                }}
              >
                Search
              </div>
            </div>
          </div>
          <div className="btn-group col-12">{this.showBtn()}</div>
        </div>
        {this.onEditting()}
        <div className="col-12">
          <hr />
        </div>
      </div>
    );
  }
}

export default Search;
