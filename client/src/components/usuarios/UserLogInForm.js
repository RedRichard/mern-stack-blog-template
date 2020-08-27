import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class UserLogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      createdNew: false,
    };

    this.onChangeUsuarioUsername = this.onChangeUsuarioUsername.bind(this);
    this.onChangeUsuarioPassword = this.onChangeUsuarioPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsuarioUsername(event) {
    this.setState(
      {
        username: event.target.value,
      },
      () => {
        // console.log(this.state.article.title);
      }
    );
  }

  onChangeUsuarioPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log("Form sent");
    // console.log("New article title: " + this.state.article.title);
    // console.log("New article sub: " + this.state.article.subtitle);
    // console.log("New article img: " + this.state.article.image);
    // console.log("New article text: " + this.state.article.text);

    let newUsuario = {
      username: this.state.username,
      password: this.state.password,
    };

    // console.log("Objeto: " + newUsuario.password);

    axios.post("http://localhost:9000/login", newUsuario).then(
      (res) => {
        console.log(res.data);
        if (res.status === 200) {
          this.setState({ createdNew: true });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    if (this.state.createdNew) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div className="container d-flex justify-content-center">
          <form onSubmit={this.onSubmit}>
            <div className="">
              <h2>Inicio de sesión</h2>
            </div>
            <div className="form-group">
              <label>Nombre de usuario:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
                onChange={this.onChangeUsuarioUsername}
              />
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Subtítulo"
                onChange={this.onChangeUsuarioPassword}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary mb-2">
                Log In!
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
