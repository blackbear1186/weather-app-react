import React from "react";
import ChangeLocation from "./ChangeLocation";

function Current(props) {
  let city = 'Waco'
  let country = 'US'
  let sunrise = new Date(props.data.sys.sunrise * 1000).toLocaleTimeString(
    "en-US"
  );
  let sunset = new Date(props.data.sys.sunset * 1000).toLocaleTimeString(
    "en-US"
  );
  let weatherIcon = props.data.weather[0].icon
  function capitalize(words) {
    return words
      .split(" ")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");
  }
  console.log(props.data)
  return (
    <div className="container">
      
        <div className="details">
          <h2>{props.data.name}</h2>
          <h1>{props.data.main.temp} {"\t\xB0"}</h1>
          <img height={50} src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
          <p>{capitalize(props.data.weather[0].description)}</p>
          <div className="min-max-temp">
            <p>High: {props.data.main.temp_max} {"\t\xB0"}</p>
            <p>Low: {props.data.main.temp_min} {"\t\xB0"}</p>
          </div>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
          <p>Humidity: {props.data.main.humidity} %</p>
          <p>
            Feels like: {props.data.main.feels_like}
            {"\t\xB0F"}
          </p>
          <p>Pressure: {props.data.main.pressure}</p>
          <p>Wind Speed: {props.data.wind.speed} mph</p>
          <ChangeLocation />

        </div>
    </div>
  );
}

export default Current;
