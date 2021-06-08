import axios from "axios";
import React, {useState} from "react";
import Date from "./Date";
import Forecast from "./Forecast";

export default function Weather (){

    let [city, setCity] = useState(null);

    let [weatherInformation, setWeatherInformation] = useState(null);

    let[ready,setReady] = useState(false);

    function getCity(event){
        setCity(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        setReady(true);

        function showWeatherInformation(response){

            let description = (response.data.weather[0].description);

            let iconUrl = `http://openweathermap.org/img/wn/${response.data.weather.[0].icon}@2x.png`
            function setIcon (){
                return (
                    <div>
                    <img src={iconUrl} alt="weather icon"/>
                    <figcaption>{description}</figcaption>
                    </div>)
            }
            let temperature = (response.data.main.temp);
            let wind = (response.data.wind.speed)*3.6;
            let humidity=(response.data.main.humidity);

            if(ready) {
                return(
        setWeatherInformation(

            <div>
                <Date/>
            <h2>
                {city}
            </h2>
            {setIcon()}
            <p>{Math.round(temperature)}ºC</p>
            <p>Wind: {Math.round(wind)} km/h</p>
            <p>Humidity: {humidity}%</p>
            
            <br/>
            <hr/>
            <Forecast/>
            </div>
        ))
    }
        else { 

        let apiKey = `011674ac65e3e0ef6d73be0d4fdbae64`
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(weatherUrl).then(showWeatherInformation);

        return("Loading")
        }}}

    return (
<div>
    <h1> Weather App</h1>
     <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter a city..." onChange={getCity}/>
         <input type="submit" value="Search"/>
     </form>

     <h2>{weatherInformation}</h2>

     <p> <a href="https://github.com/Claudia-Vieira/Weather-Project">Open Source</a> by Cláudia Vieira</p>
</div>
    )
}