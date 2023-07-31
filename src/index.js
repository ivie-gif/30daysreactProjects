// index.js
import React, {useState} from "react";
import ReactDOM from "react-dom";
import { CountriesListItems } from "../src/countList";

const listOfCountries = [
  // ["Nigeria", "30,000,000", "English", "Africa"],
  // ["Ghana", "30,000", "English", "Africa"],
  // ["South Africa", "100,000", "Zulu", "Africa"],
  // ["Morocco", "300,000", "Arabic", "Africa"],
  // ["Egypt", "400,000", "Arabic", "Africa"],
  // ["Zambia", "100,000", "French", "Africa"]


{name: "Nigeria", population: '300,000,000', language: "English", continent: 'Africa' },
{name: "Ghana", population: '30,000', language: "English", continent: "Africa"},
{name: "South Africa", population: "100,000", language: "Zulu", continent: "Africa"},



];

const App = () => {
  const [btnState, setBtnState] = useState(0)

  const handleBtnState = () => {
    setBtnState(btnState + 1)
  }



  return (
    <div>
      <h1>Countries and Flags</h1>
      <CountriesListItems listOfCountries={listOfCountries} />
      <button onClick={handleBtnState}>
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