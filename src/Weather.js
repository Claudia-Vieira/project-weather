import axios from "axios";
import React, { useState } from "react";
import Date from "./Date";
import Forecast from "./Forecast";
import Temperature from "./Temperature";
export default function Weather() {

  let [city, setCity] = useState(null);
  let [weatherInformation, setWeatherInformation] = useState(null);
  let [ready, setReady] = useState(false);

  function getCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city===null){
    return(alert("Please, enter a city!"))} 
    else{search();
    setReady(true);
  }}

  function search() {
    let apiKey = `011674ac65e3e0ef6d73be0d4fdbae64`;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(weatherUrl).then(showWeatherInformation);
  }

  function showWeatherInformation(response) {
    setWeatherInformation({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    ;
  }

  if (ready) {
    return (
      <div>
          <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a city..." onChange={getCity} />
          <input type="submit" value="Search" />
        </form>
        <Date />
        <h2>{city}</h2>
        <div>
          <img src={weatherInformation.iconUrl} alt="weather icon" />
          <figcaption>{weatherInformation.description}</figcaption>
        </div>
        <Temperature celsius={Math.round(weatherInformation.temperature)} fahrenheit={Math.round((Math.round(weatherInformation.temperature)*9)/5+32)}/>
        <p>Wind: {Math.round(weatherInformation.wind)} km/h</p>
        <p>Humidity: {weatherInformation.humidity}%</p>
        <br />
        <hr />
        <Forecast />
      </div>
    );
  } else {
    search();
    return (
    <div>
        <h1>Weather App</h1>
    <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a city..." onChange={getCity} />
          <input type="submit" value="Search" />
        </form>
        <p>Loading...</p>
        </div>);
  }
}