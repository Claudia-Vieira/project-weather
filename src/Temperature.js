import React, {useState} from "react";

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
     <p>{celsius}ºC | <a href="/" onClick={converToFahrenheit}>F</a> </p>
 )}

 else {
     return(

       <p> {fahrenheit}ºF | <a href="/" onClick={converToCelsius}>C</a></p>
     )
 }
}