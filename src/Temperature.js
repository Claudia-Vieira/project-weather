import React, {useState} from "react";
import './Temperature.css'

export default function Temperature (props){

    let celsius = (props.celsius);
    let fahrenheit = (props.fahrenheit);


    let [unit , setUnit] = useState("celsius");

    function converToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function converToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }


     if (unit==="celsius"){ return(
     <h3 id="temperature" >{celsius}ºC | <a href="/" onClick={converToFahrenheit} id="unit">F</a> </h3>
 )}

 else {
     return(

       <h3 id="temperature"> {fahrenheit}ºF | <a href="/" onClick={converToCelsius} id="unit">C</a></h3>
     )
 }
}