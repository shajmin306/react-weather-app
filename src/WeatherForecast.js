import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thurs</div>
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
