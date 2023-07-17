// // index.js
import React from 'react'
import ReactDOM from 'react-dom'
// // import asabenehImage from './images/asabeneh.jpg'

// // Header Component
// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Asabeneh Yetayeh</p>
//       <small>Oct 3, 2020</small>
//     </div>
//   </header>
// )

// // User Card Component
// // const UserCard = () => (
// //   <div className='user-card'>
// //     <img src={asabenehImage} alt='asabeneh image' />
// //     <h2>Asabeneh Yetayeh</h2>
// //   </div>
// // )

// // TechList Component
// const TechList = () => {
//   const techs = ['HTML', 'CSS', 'JavaScript']
//   const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techsFormatted
// }

// // Main Component
// const Main = () => (
//   <main>
//     <div className='main-wrapper'>
//       <p>Prerequisite to get started react.js:</p>
//       <ul>
//         <TechList />
//       </ul>
//       {/* <UserCard /> */}
//     </div>
//   </main>
// )

// // Footer Component
// const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2020</p>
//     </div>
//   </footer>
// )

// // The App, or the parent or the container component
// const App = () => (
//   <div className='app'>
//     <Header />
//     <Main />
//     <Footer />
//   </div>
// )

// const rootElement = document.getElementById('root')
// // we render the App component using the ReactDOM package
// ReactDOM.render(<App />, rootElement)


// const GetUserDetail = (firstname, lastname, city) =>{
// return `${firstname} ${lastname} lives in ${city}`
// }

// GetUserDetail('Ivie', 'Maryann', 'Lagos')


// const GetAllUserDetail = (props) => {
// return (
//   <div>
//   <h1>{props.firstname}</h1>
//   <h2>{props.lastname}</h2>
//   <p>{props.city}</p>
//   </div>
// )
// }
// <GetAllUserDetail firstname='ivie' lastname='Maryann' city='lagos' />

// const firstname='Ivie'
// const lastName =  'Maryann'
// const city = 'UK'

// const GetAllUserDetail = (props) => {
//   return (
//     <div>
//       <h2>
//         {firstname}
//         {lastName}
//         {city}
//       </h2>
//     </div>
//   )
// }



// const rootElement = document.getElementById('root')
// // we render the App component using the ReactDOM package
// ReactDOM.render(<GetAllUserDetail />, rootElement)


// tring props
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// }
// const date = 'Oct 4, 2020'

// // Header Component
// const Header = (props) => {
//   console.log(props) // empty object, {}
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {author.firstName} {author.lastName}
//         </p>
//         <small>{date}</small>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   return (
//     <div className='app'>
//       <Header />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')

// ReactDOM.render(<App />, rootElement)


// Number Props

// const Age = (props) => <div>The person is {props.age} years old.</div>
// const Weight = (props) => (
//   <p>The weight of the object on earth is {props.weight} N.</p>
// )

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   let currentYear = 2020
//   let birthYear = 1820
//   const age = currentYear - birthYear
//   const gravity = 9.81
//   const mass = 75

//   return (
//     <div className='app'>
//       <Age age={age} />
//       <Weight weight={gravity * mass} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)


// function props


// A button component

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const sayHi = () => {
//     alert('Hi')
//   }

//   return (
//     <div className='app'>
//       <Button text='Say Hi' onClick={sayHi} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement)


// A button component

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const greetPeople = () => {
//     alert('Welcome to 30 Days Of React Challenge, 2020')
//   }

//   return (
//     <div className='app'>
//       <Button text='Greet People' onClick={greetPeople} />
//       <Button text='Show Time' onClick={() => alert(new Date())} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)