import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function dailyDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <div>
      <div className="WeatherForecast-day">{dailyDate()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          <strong>{maxTemp()}°</strong>{" "}
        </span>{" "}
        <span classNAme="WeatherForecast-temperature-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
