import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-1 ">
          <div className="clearfix">
            <div className="float-left icon">
              <WeatherIcon code={props.data.icon} />{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-3">
          {" "}
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-3 weather-info">
          <ul className="weather-info">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/hr</li>
          </ul>
        </div>
        <div className="col-5 place-info">
          <h3>{props.data.city}</h3>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
