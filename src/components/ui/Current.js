import React from "react";
import ChangeLocation from "./ChangeLocation";
import sunRise from "../icons/sunrise.png";
import sunSet from "../icons/sunset.png";
import humidity from "../icons/humidity.svg";
import wind from "../icons/wind.png";
import Pressure from "../icons/Pressure.svg";
import feels from '../icons/feels.svg'

function Current(props) {
  let sunrise = new Date(props.data.sys.sunrise * 1000).toLocaleTimeString(
    "en-US"
  );
  let sunset = new Date(props.data.sys.sunset * 1000).toLocaleTimeString(
    "en-US"
  );
  let weatherIcon = props.data.weather[0].icon;
  // Capitalize the first letters of each word 
  // Use for weather description
  function capitalize(words) {
    return words
      .split(" ")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");
  }
  // console.log(props.data);
  return (
    <div className="container">
      <div className="details">
        <h2>{props.data.name}</h2>
        <h1>
          {props.data.main.temp} {"\t\xB0"}
        </h1>
        <img
          height={50}
          alt="Current weather conditions"
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        />
        {/* Capitalize first letters of each word */}
        <p>{capitalize(props.data.weather[0].description)}</p>
        {/* Get high and low temperatures to round to nearest integer */}
        <div className="min-max-temp">
          <p>
            High: {Math.round(props.data.main.temp_max)} {"\t\xB0"}
          </p>
          <p>
            Low: {Math.round(props.data.main.temp_min)} {"\t\xB0"}
          </p>
        </div>
        <div className="icons-container">
          <div className="icons">
            <img src={sunRise} alt="sunrise"/>
            <p>{sunrise}</p>
          </div>
          <div className="icons">
            <img src={sunSet} alt="sunset"/>
            <p>{sunset}</p>
          </div>
          <div className="icons">
            <img src={humidity} alt="humidity"/>
            <p>{props.data.main.humidity} %</p>
          </div>

          <div className="icons">
            <img src={wind} alt="wind"/>
            <p>{props.data.wind.speed} mph</p>
          </div>
          <div className="icons">
            <img src={Pressure} alt="atmospheric pressure"/>
            <p>{props.data.main.pressure} mb</p>
          </div>
          <div className="icons">
            <img src={feels} alt="temperature feels like"/>
            <p>
              {Math.round(props.data.main.feels_like)}
              {"\t\xB0F"}
            </p>
          </div>
        </div>

        <ChangeLocation />
      </div>
    </div>
  );
}

export default Current;
