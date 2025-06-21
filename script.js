import React, { useState } from 'react';

const WeatherApp = () => {
  const [weather, setWeather] = useState('');

  const getWeather = async () => {
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
        throw new Error('Failed to fetch weather');
      }

      const data = await response.json();
      const weatherCondition = data.weather[0].main;
      setWeather(`Current weather in ${city}: ${weatherCondition}`);
    } catch (error) {
      setWeather('Error fetching weather data');
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={getWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Current Weather
      </button>
      <div id="weatherData" className="mt-4 text-lg font-medium">
        {weather}
      </div>
    </div>
  );
};

export default WeatherApp;
