function updateTime(){
let LosAngelesElement = document.querySelector("#LosAngeles");
if (LosAngelesElement) {
    let LosAngelesDate = LosAngelesElement.querySelector(".date");
    let LosAngelesTime = LosAngelesElement.querySelector(".time");
    let LosAngelesTimeZone = moment().tz("America/Los_Angeles");

    LosAngelesTime = LosAngelesTimeZone.format("HH:mm:ss [<small>]A[</small>]");
    LosAngelesDate = LosAngelesTimeZone.format("MMMM Do, YYYY");
    LosAngelesElement.querySelector(".date").innerHTML = LosAngelesDate;
    LosAngelesElement.querySelector(".time").innerHTML = LosAngelesTime;  
}

let SydneyElement = document.querySelector("#Sydney");
if (SydneyElement) {
    let SydneyDate = SydneyElement.querySelector(".date");
    let SydneyTime = SydneyElement.querySelector(".time");
    let SydneyTimeZone = moment().tz("Australia/Sydney");

    SydneyTime = SydneyTimeZone.format("HH:mm:ss [<small>]A[</small>]");
    SydneyDate = SydneyTimeZone.format("MMMM Do, YYYY");
    SydneyElement.querySelector(".date").innerHTML = SydneyDate;
    SydneyElement.querySelector(".time").innerHTML = SydneyTime;  
}

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split ("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cities = document.querySelector("#cities");
    cities.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("HH:mm:ss [<small>]A[</small>]")}</div>
        </div>
        `;
}

setInterval(updateTime, 1000);

let citiesElement = document.querySelector("#select");
citiesElement.addEventListener("change", updateCity);