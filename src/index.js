// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'
// class App extends React.Component {
//   // declaring state
//   state = {
//     image: 'https://th.bing.com/th?id=OIP.T7HyhZlj0rqF4YfdC-WzCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
//   }
//   changeAnimal = () => {
//     let dogURL =
//       'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
//     let catURL =
//       'https://th.bing.com/th?id=OIP.uEiO9QWnzyv11o-hvortzQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
//     let image = this.state.image === catURL ? dogURL : catURL
//     this.setState({ image })
//   }

//   render() {
//     // accessing the state value
//     const count = this.state.count
//     return (
//       <div className='App'>
//         <h1>30 Days Of React</h1>
//         <div className='animal'>
//           <img src={this.state.image} alt='animal' />
//         </div>

//         <button onClick={this.changeAnimal} class='btn btn-add'>
//           Change
//         </button>
//       </div>
//     )
//   }
// }


// Using class component
// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//   state = {
//     image:
//       "https://th.bing.com/th?id=OIP.T7HyhZlj0rqF4YfdC-WzCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
//   };

//   render() {
//     return (
//       <div className="APP">
//         <h1>3o days of React</h1>
//         <h3>Changing images using state management</h3>
//         <img src={this.state.image} />
//         <div>
//           <button
//             onClick={() =>
//               this.setState({
//                 image:
//                   this.state.image ==
//                   "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg"
//                     ? "https://th.bing.com/th?id=OIP.uEiO9QWnzyv11o-hvortzQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//                     : "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg",
//               })
//             }
//           >
//             Change Images
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// Using code restructure with seperate methods 


import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    image:
      "https://th.bing.com/th?id=OIP.T7HyhZlj0rqF4YfdC-WzCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  };

  handleChangeImageURL = () => {
    const dogUrl = "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg"
    const catUrl = "https://th.bing.com/th?id=OIP.uEiO9QWnzyv11o-hvortzQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
   this.setState({image: this.state.image == dogUrl ? catUrl : dogUrl})
  }

  render() {
    return (
      <div className="APP">
        <h1>30 days of React</h1>
        <h3>Changing images using state management</h3>
        <img src={this.state.image} />
        <div>
          <button
            onClick={this.handleChangeImageURL}
          >
            Change Images
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);