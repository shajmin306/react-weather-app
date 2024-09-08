import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <DailyForecast data={forecast[0]} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[1]} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[2]} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[3]} />
          </div>
          <div className="col">
            <DailyForecast data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c9b30483aedf4foe2dd664a0ftc74778";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
