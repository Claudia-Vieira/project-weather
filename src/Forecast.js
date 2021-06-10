import React from "react";
import axios from "axios";
import './Forecast.css'

export default function Forecast (props){

    function getForecastData(response){
        console.log(response.data)
    }

    let latitute=props.coordinates.lat
    let longitude=props.coordinates.lon

    let apiKey = `011674ac65e3e0ef6d73be0d4fdbae64`;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(getForecastData);

    return(
        <div className="container">
        <div className="row">
        <div className="col">
            <div className="Forecast-day">Fri</div>
            <div className="Forecast-icon"><img src={props.iconUrl} alt="weather icon" /></div>
            <div><span className="Forecast-temperature-max">19º</span><span className="Forecast-temperature-min">10º</span></div>
        </div>
        </div>
        </div>
    )
}