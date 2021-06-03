import axios from "axios";
import React, {useState} from "react";
import Date from "./Date";
import Forecast from "./Forecast";

export default function Weather (){

    let [city, setCity] = useState(null);

    let [weatherInformation, setWeatherInformation] = useState(null);

    function showCity(event){
        setCity(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();


        function showWeatherInformation(response){

            let iconUrl = `http://openweathermap.org/img/wn/${response.data.weather.[0].icon}@2x.png`
            function setIcon (){
                return (
                    <img src={iconUrl} alt="weather icon"/>)
            }
            let temperature = (response.data.main.temp);
        
        setWeatherInformation(

            <div>
                <Date/>
            <h2>
                {city}
            </h2>
            {setIcon()}
            <p>{Math.round(temperature)}ºC</p>
            <br/>
            <p>Day</p>
            <hr/>
            <Forecast/>
            </div>
        )}

        let apiKey = `011674ac65e3e0ef6d73be0d4fdbae64`
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(weatherUrl).then(showWeatherInformation);
        }

    return (
<div>
    <h1> Weather App</h1>
     <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter a city..." onChange={showCity}/>
         <input type="submit" value="Search"/>
     </form>

     <h2>{weatherInformation}</h2>
</div>
    )
}