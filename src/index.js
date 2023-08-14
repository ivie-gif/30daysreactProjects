// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountriesListItems } from "../src/countList";

const listOfCountries = [
  // ["Nigeria", "30,000,000", "English", "Africa"],
  // ["Ghana", "30,000", "English", "Africa"],
  // ["South Africa", "100,000", "Zulu", "Africa"],
  // ["Morocco", "300,000", "Arabic", "Africa"],
  // ["Egypt", "400,000", "Arabic", "Africa"],
  // ["Zambia", "100,000", "French", "Africa"]

  {
    name: "Nigeria",
    population: "300,000,000",
    language: "English",
    continent: "West - Africa",
    image:
      "https://th.bing.com/th/id/OIP.6LwjSquMyYX6F4goUSRTnwHaFG?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Ghana",
    population: "30,000",
    language: "English",
    continent: "West - Africa",
    image:
      "https://th.bing.com/th/id/OIP.PWgWDLoIO-cj2noL9bAPqgHaE7?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "South Africa",
    population: "100,000",
    language: "Zulu",
    continent: "South - Africa",
    image:
      "https://th.bing.com/th/id/OIP.ZHRnBMS_Ce_t2XELz3sO6wHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Morocco",
    population: "90,000,000",
    language: "Arabic",
    continent: "North - Africa",
    image:
      "https://th.bing.com/th/id/OIP.02powjEKT0a_oeMozqi-2AHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Egypt",
    population: "40,000,000",
    language: "Arabic",
    continent: "North - Africa",
    image:
      "https://th.bing.com/th/id/OIP.4ve4zACsz1LZOlMcCUHGBAHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Zambia",
    population: "700,0000",
    language: "French",
    continent: "West - Africa",
    image:
      "https://th.bing.com/th/id/OIP.fy9DDB5uq8Vu-OzRyGrShgHaEK?w=291&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const App = () => {
  const [btnState, setBtnState] = useState(0);

  const handleBtnState = () => {
    if (btnState == 2) {
      setBtnState(0);
    } else {
      setBtnState(btnState + 1);
    }
  };

  console.log(btnState, "2377yuqw");

  return (
    <div>
      <h1>Countries and Flags</h1>
      <div
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          boxShadow: "2px 2px 2px 2px grey",
        }}
      >
        <CountriesListItems
          listOfCountries={listOfCountries}
          btnState={btnState}
        />
      </div>
      <button
        onClick={handleBtnState}
        style={{
          marginLeft: "45%",
          backgroundColor: "#61dbfb",
          border: "none",
          padding: "15px 20px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Change Country
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// ["https://th.bing.com/th/id/R.89f9b65feb2f0a7e5ce41a60c7e7e31f?rik=26RJtUW1YQqBcw&pid=ImgRaw&r=0",
// "https://th.bing.com/th/id/OIP.PWgWDLoIO-cj2noL9bAPqgHaE7?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// "https://th.bing.com/th/id/OIP.ZHRnBMS_Ce_t2XELz3sO6wHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// "https://th.bing.com/th/id/OIP.02powjEKT0a_oeMozqi-2AHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// "https://th.bing.com/th/id/OIP.4ve4zACsz1LZOlMcCUHGBAHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// "https://th.bing.com/th/id/OIP.fy9DDB5uq8Vu-OzRyGrShgHaEK?w=291&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// ]
