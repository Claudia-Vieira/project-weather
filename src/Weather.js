import React, {useState} from "react";

export default function Weather (){

    let [city, setCity] = useState(null);

    let [weatherInformation, setWeatherInformation] = useState(null);

    function showCity(event){
        setCity(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();

        setWeatherInformation(
            <h2>
                {city}
            </h2>
        )

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
};