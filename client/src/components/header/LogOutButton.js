import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    axios
      .get("http://localhost:9000/logout/")
      .then((res) => {
        console.log(res.data);
        this.setState({ loggedOut: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.loggedOut) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return <div onClick={this.onClick}>Log Out</div>;
    }
  }
}
