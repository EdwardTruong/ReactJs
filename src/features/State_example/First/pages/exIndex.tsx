import React, { useState } from "react";

function getRandomNumber(): number {
  const randomIndex = Math.trunc(Math.random() * 5);
  return randomIndex;
}

const colorList: string[] = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
  "white",
  "gray",
];

function ChangBoxSimple() {
  const [currentColor, setCurrentColor] = useState(() => {
    const initFunction = localStorage.getItem("box-color") || "deeppink";
    return initFunction;
  });
  console.log(`${currentColor}`);

  localStorage.setItem("box-color", currentColor);
  const changColor = () => {
    const getRandomIndex = getRandomNumber();
    const updateColor = colorList[getRandomIndex];
    setCurrentColor(updateColor);
  };
  return (
    <div>
      <h3>Practice</h3>

      <div style={{ backgroundColor: currentColor }}>Color change </div>

      <button onClick={changColor}>{currentColor}</button>
    </div>
  );
}

export default ChangBoxSimple;
