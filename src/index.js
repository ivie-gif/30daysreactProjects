import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // Setting our initial state
  state = {
    count: 1,
  };

  render() {
    return (
      <div>
        <div className="App">
          <h1>{this.state.count}</h1>
        </div>

        <div style={{ display: "flex"}}>
          <button onClick={() => this.setState({count: this.state.count + 1})}>Increase Value</button>
          <button style={{marginLeft: '10px'}} onClick={() => this.setState({count: this.state.count - 1})}>Decrease Value</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
