import React from "react";

export default function WeatherForecastDay(props){

    return(
        <div className="col">
        <div className="Forecast-day">Fri</div>
        <div className="Forecast-icon"><img src={props.iconUrl} alt="weather icon" /></div>
        <div><span className="Forecast-temperature-max">19ºC</span><span className="Forecast-temperature-min">10º</span></div>
        </div>

    )
}