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
            {forecast.map(function(dailyForecast, index){
                if (index>0&&index<6){
                return(
                   
                    <div className="col"key={index}>    
                    <WeatherForecastDay data={dailyForecast}/>
                    </div>
                    )} else{
                        return (null)
                    }
                    
            })}
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