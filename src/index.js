// index.js
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// class App extends React.Component {
//   // declaring state
//   state = {
//     count: 0,
//   }
//   render() {
//     // accessing the state value
//     const count = this.state.count
//     return (
//       <div className='App'>
//         <h1>{count} </h1>
//         <button onClick={() => count(count == this.state.count + 1)}>
//           Increase Count
//         </button>
//       </div>
//     )
//   }
// }

const App = () => {
const [count, setCount] = useState(0)

  return (
<div>
  <h1>{count}</h1>
  <button onClick={() => setCount(count + 1)}>
    Increase Count
  </button>
</div>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)