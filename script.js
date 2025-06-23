const apiKey = "YOUR_API_KEY"; // 🔁 Replace with your OpenWeatherMap API key
const button = document.getElementById("getWeatherBtn");
const weatherDiv = document.getElementById("weatherData");

button.addEventListener("click", () => {
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      weatherDiv.textContent = `Current weather in London: ${weather}`;
    })
    .catch(error => {
      weatherDiv.textContent = `Error: ${error.message}`;
    });
});
