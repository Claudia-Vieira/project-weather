import React from "react";
import './Forecast.css'

export default function Forecast (props){
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