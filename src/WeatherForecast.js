import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Sat</div>
            <WeatherIcon code="01d" />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">
                <strong>19°</strong>{" "}
              </span>{" "}
              <span classNAme="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2b6e1227e5f1f9cbb08c3dc0be367492";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
