// index.js
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [count, setCount] = useState(0)

  const handleAddCount = () => {
    setCount(count + 2)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAddCount}> 
        Increase count 
      </button>
    </div>
  )
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)