import React from "react";

export default function setDate(){

    let today=new Date();

    let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      
    let day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
    let minutes = today.getMinutes()
    if (minutes<10){
      minutes=`0${minutes}`
    }

    let date = today.getDate();

    let ordinalNumber = `th`
    if (date===1){
      ordinalNumber=`st`
    } if (date===2){
      ordinalNumber=`nd`
    }
    if (date===3){
      ordinalNumber=`rd`
    }

    return(
        <div style={{ color: "grey", marginTop:5 }}>
        <p style={{marginBottom:2, fontSize:13}}>{day[today.getDay()]},{date}{ordinalNumber} {month[today.getMonth()]}</p>
        <p style={{marginTop:1, fontSize:13}}>{today.getHours()}:{minutes}</p>
        </div>
    )
}