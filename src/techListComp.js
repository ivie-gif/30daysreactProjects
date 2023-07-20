// const TechList = () => {
//     const techs = ['HTML', 'CSS', 'JavaScript']
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted
//   }
import React from 'react'

  export class TechList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
      const techs = ['HTML', 'CSS', 'Javascript']
      const techsMap = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsMap
    }
  }