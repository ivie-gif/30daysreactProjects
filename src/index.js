// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const Button = ({ text, onClick, style }) => (
//   <button style={style} onClick={onClick}>
//     {text}
//   </button>
// );

// const buttonStyles = {
//   backgroundColor: '#61dbfb',
//   padding: 10,
//   border: 'none',
//   borderRadius: 5,
//   margin: '3px auto',
//   cursor: 'pointer',
//   fontSize: 22,
//   color: 'white',
// };

// const Header = ({ data, styles }) => {
//   console.log(data);
//   const {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   } = data;

//   return (
//     <header style={styles}>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{date}</small>
//       </div>
//     </header>
//   );
// };

// const Login = () => (
//   <div>
//     <h3>Please Login</h3>
//   </div>
// );

// const Welcome = () => (
//   <div>
//     <h1>Welcome to 30 Days Of React</h1>
//   </div>
// );

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [techs] = useState(['HTML', 'CSS', 'JS']);

//   const handleLogin = () => {
//     setLoggedIn(!loggedIn);
//   };

//   const data = {
//     welcome: '30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//     },
//     date: 'Oct 9, 2020',
//   };

//   const status = loggedIn ? <Welcome /> : <Login />;

//   return (
//     <div className='app'>
//       <Header data={data} styles={buttonStyles} />
//       {status}
//       <Button
//         text={loggedIn ? 'Logout' : 'Login'}
//         style={buttonStyles}
//         onClick={handleLogin}
//       />
//       {techs.length === 3 && (
//         <p>You have all the prerequisite courses to get started React</p>
//       )}
//       {!loggedIn && (
//         <p>
//           Please login to access more information about 30 Days Of React challenge
//         </p>
//       )}
//     </div>
//   );
// };

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./buttonComp";

const Header = ({ menu }) => {
  return (
    <header>
      <div className="header-wrapper" style={{backgroundColor: "#61dbfb", padding: '10px 15px', color: 'white'}}>
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

const App = () => {
  const menu = {
    welcome: "30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 9, 2020",
  };
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleStatus = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  let status = userLoggedIn ? (
    <h1>Welcome to 30 Days of JavaScript</h1>
  ) : (
    <h1>Please Login</h1>
  );

  return (
    <div className="app">
      <Header menu={menu} />
      {status}
      <Button
        onClick={handleStatus}
        text={userLoggedIn ? "Logout" : "Login"}
        style={{
          padding: "15px 10px",
          border: "none",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "#61dbfb",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      />

      {userLoggedIn && (
        <p>You have all the prerequisite courses to get started React</p>
      )}

      {!userLoggedIn && (
        <p>
          Please login to access more information about 30 Days Of React
          challenge
        </p>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
