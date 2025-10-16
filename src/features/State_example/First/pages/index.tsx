import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlackButton from "../../../../components/oldButton/BlackButton";

function FirstState() {
  const [color, setColor] = useState("white");
  const navigate = useNavigate();

  /**
   * Cách 1 thay đổi màu text : Tạo 1 hàm ngoài để sử lý màu
   */
  let textColor_1: string = "black";

  if (color === "red") {
    textColor_1 = "white"; // ✅ gán giá trị
  } else if (color === "yellow" || color === "green") {
    textColor_1 = "black";
  }

  const textColors: Record<string, string> = {
    red: "white",
    yellow: "black",
    green: "black",
    white: "black",
  };
  const textColor = textColors[color] || "black";

  return (
    <div>
      <div>
        <h2>Example: useState + useNavigate</h2>
        <span
          style={{
            backgroundColor: color,
            color: textColor_1,
          }}
        >
          {"First function change color text : " + color}
        </span>
        <br />
        <span
          style={{
            backgroundColor: color,
            color: textColor,
          }}
        >
          {"Second function change color text : " + color}
        </span>
      </div>

      <button onClick={() => setColor("red")}>Change to red</button>
      <button onClick={() => setColor("yellow")}>Change to red</button>
      <button onClick={() => setColor("green")}>Change to green</button>

      <BlackButton onClick={() => navigate("/")}>HomePage</BlackButton>
    </div>
  );
}

export default FirstState;
