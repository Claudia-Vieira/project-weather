import React, {useState} from "react";

export default function Weather (){

    let [city, setCity] = useState(null);

    function showCity(event){
        setCity(event.target.value);
    }

    return (
<div>
    <h1> Weather App</h1>
     <form>
         <input type="text" placeholder="Enter a city..." onChange={showCity}/>
         <input type="submit" value="Search"/>
     </form>

     <h2>{city}</h2>
</div>
    )
};