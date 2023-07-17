import React from 'react'
import ReactDOM from 'react-dom'
import Numbers from './numberData'
   


const App = () => {
const numbers = [90, 23, 57, 95, 20, 58, 49, 28, 94]

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
