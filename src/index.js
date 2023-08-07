// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 2);
  };

  const handleRemoveCount = () => {
    setCount(count - 3);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAddCount}>Increase count + 2</button>
      <button onClick={handleRemoveCount}>Decrease Count - 3</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
