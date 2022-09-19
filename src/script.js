function getWeather(response) {
  console.log(response.data);
  let temperatureRounded = Math.round(response.data.main.temp);
  let displayTemp = document.querySelector("#temperature");
  let weatherDescriptionElement = document.querySelector("#weatherDescription");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let highTemp = document.querySelector("#highTemp");
  let lowTemp = document.querySelector("#lowTemp");
  let weatherGif = document.querySelector("#weather-gif");
  let weatherDescription = response.data.weather[0].main;
  celsiusTemperature = response.data.main.temp;

  displayTemp.innerHTML = `${temperatureRounded}`;
  weatherDescriptionElement.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  highTemp.innerHTML = Math.round(response.data.main.temp_max);
  lowTemp.innerHTML = Math.round(response.data.main.temp_min);

  if (weatherDescription === "Rain") {
    weatherGif.setAttribute("src", "images/rain.gif");
  }
  if (weatherDescription === "Clear") {
    weatherGif.setAttribute("src", "images/sun.gif");
  }
  if (weatherDescription === "Clouds") {
    weatherGif.setAttribute("src", "images/cloudy.gif");
  }
  if (weatherDescription === "Thunderstorm") {
    weatherGif.setAttribute("src", "images/storm.gif");
  }
  if (weatherDescription === "Drizzle") {
    weatherGif.setAttribute("src", "images/drizzle.gif");
  }
  if (weatherDescription === "Snow") {
    weatherGif.setAttribute("src", "images/snowflake.gif");
  }
  if (
    weatherDescription === "Mist" ||
    weatherDescription === "Smoke" ||
    weatherDescription === "Haze" ||
    weatherDescription === "Fog" ||
    weatherDescription === "Dust"
  ) {
    weatherGif.setAttribute("src", "images/foggy.gif");
  }
}

function showCity(event) {
  let city = document.querySelector("#city-input").value;
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getWeather);
}

let citySearchForm = document.querySelector("#city-form");
citySearchForm.addEventListener("submit", showCity);

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
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let todaysDateFormatted = `${currentDay} ${currentDate} ${currentMonth} ${currentHours}:${currentMinutes}`;
  return todaysDateFormatted;
}

let date = document.querySelector("#date");
date.innerHTML = formatDate(todaysDate);

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}

let celsiusTemperature = null;

let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", displayCity);

function changeToF(event) {
  event.preventDefault();
  let FTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
  let changeTemperatureF = document.querySelector("#temperature");
  changeTemperatureF.innerHTML = FTemperature;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToF);

function changeToC(event) {
  event.preventDefault();
  let changeTemperatureC = document.querySelector("#temperature");
  changeTemperatureC.innerHTML = Math.round(celsiusTemperature);
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeToC);

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
