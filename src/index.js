// Pure JavaScript class and child
// Imagine this what we import from React package
// class Component {
//   constructor(props) {}
// }

// // This how we make class based components by inheriting from the parent
// class Child extends Component {
//   constructor(props) {
//     super(props);
//   }
// }

// Changing to a Class component

import React from "react";
import ReactDOM from "react-dom";
import {TechList} from './techListComp'

class Main extends React.Component {
constructor(props){
  super(props)
}
render(){
  return (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
    </div>
  </main>
  )
}
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
