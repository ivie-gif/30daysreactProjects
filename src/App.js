// import React, { Component } from 'react'
// // if it is class components
// export class App extends Component {
//   handleClick = () => {
//     alert('Welcome to 30 Days Of React Challenge')
//   }
//   render() {
//     return (
//       <a href='#' onClick={this.handleClick}>
//         Click me
//       </a>
//     )
//   }
// }

import React from "react";

export const App = () => {
  const handleClickLink = () => {
    alert("Welcome to 30 days of React");
  };

  return (
    <a href="#" onClick={handleClickLink}>
      Click this Link
    </a>
  );
};
