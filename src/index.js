// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { GettingStarted } from "./gettingStarted";
import { SiteCourseListing } from "./prequsiteComp";
import { Image } from "./header";
import { Footer } from "./footer";

const starts = [
  { title: "Getting Started with React" },
  { library: "React Library" },
  { name: "Ivie Maryann Emwiongbon" },
  { color: "#a1eeec" },
];

const courseLists = [
  ["Prerequisite to get started React.js"],
  ["HTML"],
  ["CSS"],
  ["JavaScript"],
];

const footerLists = [["Copyright", "2023"]];

const App = () => {
  const [initialColor, setInitialColor] = useState("#FFFFFF");

  console.log(initialColor, "adue7");

  const handleChange = () => {
    setInitialColor(initialColor == "#000000");
  };
  return (
    <div style={{ backgroundColor: `${initialColor}` }}>
      <div
        style={{
          backgroundColor: "#0ee4f8",
          height: "200px",
          padding: "3% 0 0 5%",
          borderBottom: "1px solid grey",
        }}
      >
        <h1>Welcome to 30 days of Javascript</h1>
        <GettingStarted starts={starts} />
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          height: "200px",
          padding: "1% 0 0 5%",
        }}
      >
        <SiteCourseListing courseLists={courseLists} />
      </div>
      <Image />
      <div style={{ marginTop: "5px", padding: "1% 0 0 5%", }}>
        <button
          style={{
            backgroundColor: "#0ee4f8",
            padding: "15px 10px",
            border: "none",
            fontSize: "15px",
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
          onClick={handleChange}
        >
          Change Background Color
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#0ee4f8",
          marginTop: "100px",
          padding: "15px 0",
          borderTop: "1px solid grey",
        }}
      >
        <Footer footerLists={footerLists} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
