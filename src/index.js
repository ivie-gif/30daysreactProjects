// index.js

// Class Component
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // declaring state
  state = {
    count: 5,
  }
  render() {
    // accessing the state value
    // const count = this.state.count
    return (
      <div className='App'>
        <h1>{this.state.count} </h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click Here</button>
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// Functional component 
// const App = () => {
//   const [count, setCount] = useState(2)

//   return (
//     <div className='App'>
//       <h1>{count}</h1>
//       <button onClick={()=> setCount(count + 1)}> Increase value</button>
//     </div>
//   )
// }

