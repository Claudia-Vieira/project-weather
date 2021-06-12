import React from "react";

export default function WeatherForecastDay(props){

    function maxTemperature (){
        let maxTemperature=Math.round(props.data.temp.max);
        return(maxTemperature);
    }

    
    function minTemperature (){
        let minTemperature=Math.round(props.data.temp.min);
        return(minTemperature);
    }

    function getIcon (){
        let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
        return(iconUrl);
    }

    function day(){
        let date=new Date(props.data.dt*1000)
        let day=date.getDay();

        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        return(days[day]);
    }

    return(
        <div>
        <div className="Forecast-day">{day()}</div>
        <div className="Forecast-icon"><img src={getIcon()} alt="weather icon" /></div>
        <div><span className="Forecast-temperature-max">{maxTemperature()}ºC</span><span className="Forecast-temperature-min">{minTemperature()}º</span></div>
        </div>
    )
}