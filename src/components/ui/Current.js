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
  function capitalize(words) {
    return words
      .split(" ")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");
  }
  console.log(props.data);
  return (
    <div className="container">
      <div className="details">
        <h2>{props.data.name}</h2>
        <h1>
          {props.data.main.temp} {"\t\xB0"}
        </h1>
        <img
          height={50}
          src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        />
        <p>{capitalize(props.data.weather[0].description)}</p>
        <div className="min-max-temp">
          <p>
            High: {props.data.main.temp_max} {"\t\xB0"}
          </p>
          <p>
            Low: {props.data.main.temp_min} {"\t\xB0"}
          </p>
        </div>
        <div className="icons-container">
          <div className="icons">
            <img src={sunRise} height="30px" />
            <p>{sunrise}</p>
          </div>
          <div className="icons">
            <img src={sunSet} height="30px" />
            <p>{sunset}</p>
          </div>
          <div className="icons">
            <img src={humidity} height="30px" />
            <p>{props.data.main.humidity} %</p>
          </div>

          <div className="icons">
            <img src={wind} height="30px" />
            <p>{props.data.wind.speed} mph</p>
          </div>
          <div className="icons">
            <img src={Pressure} height="30px" />
            <p>{props.data.main.pressure}nPH</p>
          </div>
          <div className="icons">
            <img src={feels} height="30px"/>
            <p>
              {props.data.main.feels_like}
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
