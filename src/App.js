// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export class App extends Component {
//   // declaring state
//   // initial state
//   state = {
//     firstName: '',
//   }
//   handleChange = (e) => {
//     const value = e.target.value
//     this.setState({ firstName: value })
//   }

//   render() {
//     /*
//      accessing the state value and 
//      this value will injected to the input in the value attribute
//      */

//     const firstName = this.state.firstName
//     return (
//       <div className='App'>
//         <label htmlFor='firstName'>First Name: </label>
//         <input
//           type='text'
//           id='firstName'
//           name='firstName'
//           placeholder='First Name'
//           value={firstName}
//           onChange={this.handleChange}
//         />
//         <h1>{this.state.firstName}</h1>
//       </div>
//     )
//   }
// }



import React, { useState } from 'react'
import ReactDOM from 'react-dom'


export const App = () => {
const [inputName, setInputName] = useState('')

const handleNameValue = (e) => {
    const value = e.target.value
    setInputName(value)
}

console.log(inputName, '9877y')
return (
    <div>
        <h3>First Name: </h3>
        <input 
        type='text'
           id='firstName'
           name='firstName'
           placeholder='First Name'
           value={inputName}
           onChange={handleNameValue}
        />

        <h1>{inputName}</h1>
    </div>
)
}

