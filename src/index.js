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
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
