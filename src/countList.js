import React from 'react'

// Component to be displayed
const Countries = ({listOfCountry: {name, population, language, continent}}) => {
    return (
        <div>
           <h1>Name: {name} </h1>
           <h1>Population: {population}</h1>  
           <h1>Language: {language}</h1>
           <h1>Continent: {continent}</h1>
        </div>
    )
}

// console.log(listOfCountry, '8uis7yhsayy')
export const CountriesListItems = ({listOfCountries}) => {
    console.log(listOfCountries)
const listItems = listOfCountries.map((listOfCountry) => <Countries listOfCountry={listOfCountry} />)
return <div>{listItems}</div>

}