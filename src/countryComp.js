import React from 'react'


// This is the component that shows on the browser
export const Country = ({ country: { name, city } }) => {
    return (
      <div>
        <h1>{name}</h1>
        <small>{city}</small>
      </div>
    )
  }

//   This is the component where the mapping takes place
  export const Countries = ({ countries }) => {
    const countryList = countries.map((country) => <Country country={country} />)
    return <div>{countryList}</div>
  }

//   export default Countries