let now = new Date();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minut = now.getMinutes();
if (minut < 10) {
  minut = `0${minut}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let weathDate = document.querySelector("#detail-date");
weathDate.innerHTML = `${day} ${hour}:${minut}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
//let city = document.querySelector("#city");
//city.innerHTML = response.data.name;

function searchCity(city) {
  let apiKey = "2a75edcb8fdbfdb26536172cdbc45114";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function cityChoise(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", cityChoise);

searchCity("Paris");
