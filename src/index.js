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
  const [btnState, setBtnState] = useState(false);
  let status;
  let text;

  const handleBtnStatus = () => {
    setBtnState(!btnState)
  };

  console.log(btnState, "88uweyuw");

    if (btnState) {
      status = <h3>Welcome to 30 Days Of React</h3>
      text= 'Logout'
    } else {
      status = <h3>Please Login</h3>
      text = 'Login'
    }


  return (
    <div className="app">
      <Header menu={menu} />
      <h2>{status}</h2>
      <Button
      onClick={handleBtnStatus}
      text= {text}
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
