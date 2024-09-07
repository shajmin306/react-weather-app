import React from "react";

export default function DailyForecast(props) {
  return (
    <div>
      <div className="WeatherForecastDay">{props.data.time}</div>
      <img src={props.data.iconUrl} alt={props.data.description} />
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastMinTemp">
          {Math.round(props.data.temp.min)}°C|
        </span>
        <span className="WeatherForecastMaxTemp">
          {Math.round(props.data.temp.max)}°C{" "}
        </span>
      </div>{" "}
    </div>
  );
}
