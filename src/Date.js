import React from "react";

export default function setDate(){

    let today=new Date();

    let month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      
    let day = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
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
        <div style={{ color: "grey" }}>
        <p>{day[today.getDay()]},{date}{ordinalNumber} {month[today.getMonth()]}</p>
        <p>{today.getHours()}:{minutes}</p>
        </div>
    )
}