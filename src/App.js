import React, { Component } from "react";
import Login from "./components/login/Login";
import './styles/global.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Hello World</h1> */}
        <Login />
      </div>
    );
  }
}
