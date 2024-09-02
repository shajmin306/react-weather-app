import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thursday</div>
          <img src={props.data.iconUrl} alt={props.data.description} />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastMinTemp">10°C |</span>
            <span className="WeatherForecastMaxTemp">19°C </span>
          </div>
        </div>
      </div>
    </div>
  );
}
