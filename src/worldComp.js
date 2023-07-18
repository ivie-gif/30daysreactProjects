import React from "react";

const WorldColorMap = ({ population: { name, color, width, number } }) => {
  return (
    <div style={{ display: "flex", margin: "0 10% 0 20%" }}>
      <h3>{name}</h3>
      <h3
        style={{
          backgroundColor: `${color}`,
          width: "400px",
          margin: "19px",
          width: `${width}`,
        }}
      >
        {" "}
      </h3>
      <h3>{number}</h3>
    </div>
  );
};

export const ColorCombo = ({ populations }) => {
  const colorList = populations.map((population) => (
    <WorldColorMap population={population} />
  ));
  return <div>{colorList}</div>;
};
