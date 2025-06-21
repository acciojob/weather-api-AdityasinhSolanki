document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // 🔁 Replace with your OpenWeatherMap API key
  const city = 'London';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Weather fetch failed');
    }

    const data = await response.json();
    const weatherMain = data.weather[0].main;
    document.getElementById('weatherData').textContent = `Current weather in ${city}: ${weatherMain}`;
  } catch (error) {
    document.getElementById('weatherData').textContent = 'Error fetching weather data.';
    console.error(error);
  }
}
