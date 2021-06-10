import React, { useState } from "react";
import axios from "axios";
import './Forecast.css'
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast (props){

    let [forecast, setForecast]=useState(null);
    let [loaded, setLoaded]=useState(false);

    function getForecastData(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

   
if (loaded){
    return(
        <div className="container">
        <div className="row">
        <WeatherForecastDay data={forecast[1]}/>
        <WeatherForecastDay data={forecast[2]}/>
        <WeatherForecastDay data={forecast[3]}/>
        <WeatherForecastDay data={forecast[4]}/>
        <WeatherForecastDay data={forecast[5]}/>
        </div>
        </div>
    );
} else {
    let latitute=props.coordinates.lat;
    let longitude=props.coordinates.lon;
    let apiKey = `011674ac65e3e0ef6d73be0d4fdbae64`;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(getForecastData);

    return null;

}}