function updateTime(){
let LosAngelesElement = document.querySelector("#LosAngeles");
let LosAngelesDate = LosAngelesElement.querySelector(".date");
let LosAngelesTime = LosAngelesElement.querySelector(".time");
let LosAngelesTimeZone = moment().tz("America/Los_Angeles");

LosAngelesTime = LosAngelesTimeZone.format("HH:mm:ss [<small>]A[</small>]");
LosAngelesDate = LosAngelesTimeZone.format("MMMM Do, YYYY");
LosAngelesElement.querySelector(".date").innerHTML = LosAngelesDate;
LosAngelesElement.querySelector(".time").innerHTML = LosAngelesTime;


let SydneyElement = document.querySelector("#Sydney");
let SydneyDate = SydneyElement.querySelector(".date");
let SydneyTime = SydneyElement.querySelector(".time");
let SydneyTimeZone = moment().tz("Australia/Sydney");

SydneyTime = SydneyTimeZone.format("HH:mm:ss [<small>]A[</small>]");
SydneyDate = SydneyTimeZone.format("MMMM Do, YYYY");
SydneyElement.querySelector(".date").innerHTML = SydneyDate;
SydneyElement.querySelector(".time").innerHTML = SydneyTime;
};

setInterval(updateTime, 1000);