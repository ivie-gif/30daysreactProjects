// // index.js
// index.js
// import React from 'react'
// import ReactDOM from 'react-dom'

// // A button component
// const Button = ({ text, onClick, style }) => (
//   <button style={style} onClick={onClick}>
//     {text}
//   </button>
// )

// // CSS styles in JavaScript Object
// const buttonStyles = {
//   backgroundColor: '#61dbfb',
//   padding: 10,
//   border: 'none',
//   borderRadius: 5,
//   margin: '3px auto',
//   cursor: 'pointer',
//   fontSize: 22,
//   color: 'white',
// }

// // class based component
// class Header extends React.Component {
//   render() {
//     console.log(this.props.data)
//     const {
//       welcome,
//       title,
//       subtitle,
//       author: { firstName, lastName },
//       date,
//     } = this.props.data

//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>
//             {firstName} {lastName}
//           </p>
//           <small>{date}</small>
//         </div>
//       </header>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     loggedIn: false,
//   }
//   handleLogin = () => {
//     this.setState({
//       loggedIn: !this.state.loggedIn,
//     })
//   }

//   render() {
//     const data = {
//       welcome: '30 Days Of React',
//       title: 'Getting Started React',
//       subtitle: 'JavaScript Library',
//       author: {
//         firstName: 'Asabeneh',
//         lastName: 'Yetayeh',
//       },
//       date: 'Oct 9, 2020',
//     }

//     let status
//     let text

//     if (this.state.loggedIn) {
//       status = <h1>Welcome to 30 Days Of React</h1>
//       text = 'Logout'
//     } else {
//       status = <h3>Please Login</h3>
//       text = 'Login'
//     }

//     return (
//       <div className='app'>
//         <Header data={data} />
//         {status}
//         <Button text={text} style={buttonStyles} onClick={this.handleLogin} />
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// // index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./buttonComp";

const Header = ({ menu }) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{menu.welcome}</h1>
        <h2>{menu.title}</h2>
        <h3>{menu.subtitle}</h3>
        <p>
          {menu.author.firstName} {menu.author.lastName}
        </p>
        <small>{menu.date}</small>
        <p>Select a country for your next holiday</p>
      </div>
    </header>
  );
};

const App = ({
  menu = {
    welcome: "30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 9, 2020",
  },
}) => {
  const [btnState, setBtnState] = useState(true);
  let login = false;

  const handleBtnStatus = () => {
    setBtnState(!btnState)
  };

  console.log(btnState, "88uweyuw");
  const handleStatus = () => {
    if (login) {
      return <h3>Welcome to 30 Days Of React</h3>;
    } else {
      return <h3>Please Login</h3>;
    }
  };

  return (
    <div className="app">
      <Header menu={menu} />
      <h2>{handleStatus()}</h2>
      <Button
      onClick={handleBtnStatus}
      text= 'Toggle Button'
        style={{
          padding: "15px 10px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#61dbfb",
          border: "none",
          borderRadius: "5px",
          cursor: 'pointer'
        }}    
      />

    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
