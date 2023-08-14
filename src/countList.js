import React from 'react'

// Component to be displayed
const Countries = ({listOfCountry: {name, population, language, continent, image}}) => {
    return (
        <div style={{ margin: '0px 0px 40px 120px', padding: '15px 0px', color: 'grey'}}>
           <img src={image} />
           <h3>Name: {name} </h3>
           <h3>Population: {population}</h3>  
           <h3>Language: {language}</h3>
           <h3>Continent: {continent}</h3>
        </div>
    )
}

// console.log(listOfCountry, '8uis7yhsayy')
export const CountriesListItems = ({listOfCountries, btnState}) => {
const listItems= listOfCountries[btnState]
return <Countries listOfCountry={listItems} />
}