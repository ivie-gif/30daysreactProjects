import React from "react";

const ColorComp = ({ color: { number, color } }) => {
  return (
    <div style={{ width: "30px", border: "1px solid white", padding: "50px", backgroundColor: `${color}`}}>
      <h1 style={{color: 'white'}}>{number}</h1>
    </div>
  );
};

export const Colors = ({ colorCodes }) => {
  const colorList = colorCodes.map((color) => <ColorComp color={color} />);
  return <div style={{ display: "flex", margin: '0 15% 0 15%' }}>{colorList}</div>;
};
