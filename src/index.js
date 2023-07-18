import React from 'react'
import ReactDOM from 'react-dom'
import {ColorCombo} from './worldComp'


const populations = [ 
  {name: 'World', color: '#d79a55', number: '3,000,000'},
  {name: 'Nigeria', color: '#d79a55', number: '1,000,000'},
  {name: 'Ghana', color: '#d79a55', number: '100,000'},
  {name: 'South Africa', color: '#d79a55', number: '320,000'},
  {name: 'Guinea', color: '#d79a55', number: '5,000'},
  {name: 'Zambia', color: '#d79a55', number: '300'}
]



const App = () => (
  <div className='container'>
    <div>
      <h1 style={{textAlign: 'center'}}>30 days of React</h1>
      <h2 style={{textAlign: 'center'}}>World Population</h2>
      <h6 style={{textAlign: 'center'}}>Ten most populated countries</h6>
      <ColorCombo populations={populations} />
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)