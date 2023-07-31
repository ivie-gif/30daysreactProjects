// Skill Component
import React from 'react'

// Component being displayed on the browser
const GetStarted = ({start: {name, library, title}}) => {
    
    return (
        <div>
            <h3>{title}</h3>
            <h4>{library}</h4>
            <h4>{name}</h4>
        </div>
    )
}


export const GettingStarted = ({starts}) => {
    console.log(starts, 'yyewywe')
const gettingStartedList = starts.map((start) => (<GetStarted start={start}/>))
return(<div>{gettingStartedList}</div>)
}




