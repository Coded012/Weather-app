function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "0ea05b39cdc58dfcbbced00d7349e5f4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.log("Error fetching weather data:", error);
    });
}
function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  if (data.cod === "404") {
    weatherInfo.innerHTML = "City not found. Please try again.";
  } else {
    const cityName = data.name;
    const weatherDescription = data.weather[0].description;
    const temperature = (data.main.temp - 273.15).toFixed(1);
    weatherInfo.innerHTML = `<h2>${cityName}</h2>
    <h3>Weather: ${weatherDescription}</h4>
    <h3>Temperature: <span style="font-size: 20px">${temperature}°C<span></h3>`;
  }
}
