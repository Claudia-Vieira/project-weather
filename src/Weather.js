import axios from "axios";
import React, { useState } from "react";
import Loader from "react-loader-spinner";

import Date from "./Date";
import Forecast from "./Forecast";
import Temperature from "./Temperature";
import './Weather.css';
export default function Weather() {

  let [city, setCity] = useState("");
  let [weatherInformation, setWeatherInformation] = useState(null);
  let [ready, setReady] = useState(false);

  function getCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length===0){
    return(alert("Please, enter a city!"))} 
    else{search();
  }}

  function search() {
    let apiKey = `011674ac65e3e0ef6d73be0d4fdbae64`;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(weatherUrl).then(showWeatherInformation);
  }

  function showWeatherInformation(response) {
    setWeatherInformation({
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);   ;
  }

  if (ready) {
    return (
      <div>
          <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a city..." onChange={getCity} id="text"/>
          <input type="submit" value="Search" id="search"/>
        </form>
        <Date />
        <h2 id="city">{weatherInformation.city}</h2>
        <div>
          <img src={weatherInformation.iconUrl} alt="weather icon" />
          <figcaption><i>{weatherInformation.description}</i></figcaption>
        </div>
        <Temperature celsius={Math.round(weatherInformation.temperature)} fahrenheit={Math.round((Math.round(weatherInformation.temperature)*9)/5+32)}/>
        <p><strong>Wind:</strong> {Math.round(weatherInformation.wind)} km/h</p>
        <p><strong>Humidity:</strong> {weatherInformation.humidity}%</p>
        <br />
        <hr />
        <Forecast iconUrl={weatherInformation.iconUrl} />
      </div>
    );
  } else {
    return (
    <div>
        <h1>Weather App</h1>
    <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a city..." onChange={getCity} id="text"/>
          <input type="submit" value="Search" id="search"/>
        </form>
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>);
  }
}