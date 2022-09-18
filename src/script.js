function getWeather(response) {
  console.log(response.data);
  let temperatureRounded = Math.round(response.data.main.temp);
  console.log(temperatureRounded);
  let displayTemp = document.querySelector("#temperature");
  let weatherDescription = document.querySelector("#weatherDescription");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  displayTemp.innerHTML = `${temperatureRounded}`;
  weatherDescription.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
}

function showCity(event) {
  let city = document.querySelector("#city-input").value;
  console.log(city);
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getWeather);
}

let citySearchForm = document.querySelector("#city-form");
citySearchForm.addEventListener("submit", showCity);

//function currentLocationWeather(response) {
//console.log(response.data);
//let temperatureRounded = Math.round(response.data.main.temp);
//console.log(temperatureRounded);
//let h1 = document.querySelector("h1");
//h1.innerHTML = `The current temperature at your location is ${temperatureRounded}°C`;
//}

//function showLocation(position) {
//let lat = position.coords.latitude;
//let long = position.coords.longitude;
//let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
//axios.get(apiUrl).then(currentLocationWeather);
//}

//navigator.geolocation.getCurrentPosition(showLocation);

let todaysDate = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
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
    "December",
  ];
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();

  let todaysDateFormatted = `${currentDay} ${currentDate} ${currentMonth} ${currentHours}:${currentMinutes}`;
  return todaysDateFormatted;
}
console.log(formatDate(todaysDate));

let date = document.querySelector("#date");
date.innerHTML = formatDate(todaysDate);

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}

let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", displayCity);

function changeToF(event) {
  event.preventDefault();
  let changeTemperatureF = document.querySelector("#temperature");
  changeTemperatureF.innerHTML = "72";
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToF);

function changeToC(event) {
  event.preventDefault();
  let changeTemperatureC = document.querySelector("#temperature");
  changeTemperatureC.innerHTML = "22";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeToC);
