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
      
    let date = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ];

    return(
        <div>
        <p>{date[today.getDate()]},{today.getDay()}th {month[today.getMonth()]}</p>
        <p>{today.getHours()}:{today.getMinutes()}</p>
        </div>
    )
}