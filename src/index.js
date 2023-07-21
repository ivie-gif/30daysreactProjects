// Class function

// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//   // Setting our initial state
//   state = {
//     count: 1,
//   };

//   addValue = () => {
//     this.setState({count: this.state.count + 1})
//   };

//   minusValue = () => {
//     this.setState({count: this.state.count - 1})
//   }

//   render() {
//     return (
//       <div>
//         <div className="App">
//           <h1>{this.state.count}</h1>
//         </div>

//         <div style={{ display: "flex"}}>
//           <button onClick={this.addValue}>Increase Value</button>
//           <button style={{marginLeft: '10px'}} onClick={this.minusValue}>Decrease Value</button>
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// Function component
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(0);


  const handleAdd = () => {
    setValue(value + 1)
  }

  const handleMinus = () => {
    setValue(value - 1)
  }


  return (
    <div>
      <div className="App">
        <h1>{value}</h1>
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={handleAdd}>Increase Value</button>
        <button style={{ marginLeft: "10px" }} onClick={handleMinus}>
          Decrease Value
        </button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
