import React from "react";
import "../Styles/Weather.css";

export default function WeatherInfo(props) {
  const { temp, humidity, desc, city } = props.data;
  return (
    <React.Fragment>
      <h2>{desc}</h2>
      <div>
        <h4 className="header-description">City</h4>
        <p>{city}</p>
      </div>
      <div className="header-description">
        <h4>Temperature</h4>
        <p>
          {temp} <span className="degree-symbol"></span> F
        </p>
      </div>
      <div className="header-description">
        <h4>Humidity</h4>
        <p>{humidity}%</p>
      </div>
    </React.Fragment>
  );
}
