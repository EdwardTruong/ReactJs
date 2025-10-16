import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import BlackButton from "../../components/oldButton/BlackButton";

function Structure() {
  const navigate = useNavigate(); // có cái này mới quay lại home được.

  return (
    <div className="folder-structure">
      <ul className="folder-structure">
        <li>
          src
          <ul>
            <li>
              components (shared components between features)
              <ul>
                <li>Loading</li>
                <li>index.jsx</li>
                <li>styles.scss</li>
              </ul>
            </li>
            <li>
              features
              <ul>
                <li>
                  Todo
                  <ul>
                    <li>components (components of feature Todo)</li>
                    <li>pages (pages of feature Todo)</li>
                    <li>index.jsx (entry point of feature Todo)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>App.js</li>
          </ul>
        </li>
      </ul>

      <div>
        <h2>Chính xác hơn hãy xem component/Header Hoặc là Loading :</h2>
        <p>trong đó sẽ có file index.tsx , và style.css </p>
        <h2>Tạo feature folder : </h2>
      </div>
      <BlackButton onClick={() => navigate("/")}>HomePage</BlackButton>
      {/* src
|__ components (shared components between features)
| |__ Loading
| |__ index.jsx
| |__ styles.scss
|
|__ features
| |__ Todo
| |__ components (components of feature Todo)
| |__ pages (pages of feature Todo)
| |__ index.jsx (entry point of feature Todo)
|
|__ App.js */}
    </div>
  );
}

export default Structure;
