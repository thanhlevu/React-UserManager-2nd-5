import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import UserTable from "./Components/UserTable";
import AddUserCard from "./Components/AddUserCard";
import { Component } from "react";
import dataU from "./Components/Data.json";
const uuidv1 = require("uuid/v1");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onBtn: false,
      keyword: "",
      data: [],
      userEditting: false
    };
  }

  componentWillMount() {
    console.log("localStorage: userData ", localStorage.getItem("userData"));
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(dataU));
    } else {
      var x = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: x
      });
    }
    console.log("state: data ", this.state.data);
  }

  onCard() {
    this.setState({
      onBtn: !this.state.onBtn
    });
  }

  getKey(key) {
    this.setState({
      keyword: key
    });
  }

  getNewUser(name, phone, grant) {
    var newUser = {
      id: uuidv1(),
      name: name,
      phone: phone,
      grant: grant
    };
    var users = this.state.data;
    users.push(newUser);
    this.setState({
      data: users
    });
  }
  getnewUpdate(userInfoChanged) {
    var dataX = this.state.data;
    dataX.forEach(user => {
      if (user.id === userInfoChanged.id) {
        user.name = userInfoChanged.name;
        user.phone = userInfoChanged.phone;
        user.grant = userInfoChanged.grant;
      }
    });
    this.setState({
      data: dataX
    });
    localStorage.setItem("userData", JSON.stringify(dataX));
  }

  editUser(user) {
    this.setState({
      userUpdated: user
    });
  }
  onEditStatus() {
    this.setState({
      userEditting: true
    });
  }
  offEditStatus() {
    this.setState({
      userEditting: false
    });
  }

  deleteUser(id) {
    var dataX = this.state.data.filter(user => user.id !== id);
    this.setState({
      data: dataX
    });
    localStorage.setItem("userData", JSON.stringify(dataX));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                onBtnx={this.state.onBtn}
                showCard={() => this.onCard()}
                onSearchProp={key => this.getKey(key)}
                userUpdatedProp={this.state.userUpdated}
                onEdittingProp={this.state.userEditting}
                offEditStatus={() => this.offEditStatus()}
                getnewUpdate={info => {
                  this.getnewUpdate(info);
                }}
              />
              <UserTable
                keyx={this.state.keyword}
                editUser={user => {
                  this.editUser(user);
                }}
                deleteUser={id => this.deleteUser(id)}
                onEdittingProp={this.state.userEditting}
                onEditStatus={() => this.onEditStatus()}
                dataUser={this.state.data.filter(user =>
                  user.name
                    .toLowerCase()
                    .includes(this.state.keyword.toLowerCase())
                )}
              />
              <AddUserCard
                show={this.state.onBtn}
                getNewUserProp={(name, phone, grant) =>
                  this.getNewUser(name, phone, grant)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
