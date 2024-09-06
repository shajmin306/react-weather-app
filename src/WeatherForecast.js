import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import DailyForecast from "./DailyForecast";

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
            <DailyForecast data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
