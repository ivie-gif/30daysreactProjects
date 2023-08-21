import React, { Component } from "react";
export class App extends Component {
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge");
  };

  render() {
    return <button onClick={this.greetPeople}> Click Me </button>;
  }
}
