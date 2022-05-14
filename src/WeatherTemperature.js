import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <span className="WeatherTemperature float-right">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a className="fahrenheit" href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitValue = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(fahrenheitValue)}</span>
        <span className="unit">
          <a className="fahrenheit" href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
