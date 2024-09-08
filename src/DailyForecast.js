import React from "react";

export default function DailyForecast(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = days[new Date(props.data.time * 1000).getDay()];

  return (
    <div>
      <div className="WeatherForecastDay">{date}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastMinTemp">
          {Math.round(props.data.temperature.minimum)}°C |{" "}
        </span>
        <span className="WeatherForecastMaxTemp">
          {Math.round(props.data.temperature.maximum)}°C{" "}
        </span>
      </div>{" "}
    </div>
  );
}
