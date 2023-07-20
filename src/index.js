// index.js

import React from "react";
import ReactDOM from "react-dom";
import {Header} from './header'

// class based component

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };

    return (
      <div className="app">
        <Header data={data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
