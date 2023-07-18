import React from 'react'
import ReactDOM from 'react-dom'
import {Colors} from './colorComponent'


const colorCodes = [
{number: '0', color: "#00AF43"},
{number: '1', color: "#d2eb76"},
{number: '2', color: "#d33030"},
{number: '3', color: "#d33030"},
{number: '4', color: "#00AF43"},
{number: '5', color: "#d33030"},
{number: '6', color: "#00AF43"},
{number: '7', color: "#d33030"},
]

const App = () => (
  <div className='container'>
    <div>
      <h1 style={{fontWeight: 'bolder', textAlign: 'center'}}>30 days of React</h1>
      <h2 style={{textAlign: 'center'}}>Number Generator</h2>
    
    {/* <div style={{display: 'flex'}}> */}

    <Colors colorCodes={colorCodes} />
    {/* </div> */}
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)