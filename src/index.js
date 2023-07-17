// import React from 'react'
// import ReactDOM from 'react-dom'

// const Numbers = ({ numbers }) => {
//   // modifying array to array of li JSX
//   const list = numbers.map((number) => <li>{number}</li>)
//   return list
// }

// // App component

// const App = () => {
//   const numbers = [1, 2, 3, 4, 5]

//   return (
//     <div className='container'>
//       <div>
//         <h1>Numbers List</h1>
//         <ul>
//           <Numbers numbers={numbers} />
//         </ul>
//       </div>
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

import React from "react";
import ReactDOM from "react-dom";
import mockNumber from "./mockNumberData";

const App = () => {

  console.log(mockNumber)
  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <h2>
          {mockNumber.map((mockNum) => {
           return (

             <li>{mockNum.number}</li>
           )
            
          })}
        </h2>
      </div>
    </div>
  );
};
// };
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
