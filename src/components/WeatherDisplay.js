import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  // Extract the selectedCity and weather data from the Redux store
  const selectedCity = useSelector((state) => state.selectedCity);
  const weather = useSelector((state) => state.weather);

  // Function to render weather information
  const renderWeather = () => {
    // Check if weather data exists; if not, return null
    if (!weather.data) {
      return null;
    }

    return (
      <div className="container mt-4">
        <div style={{ textAlign: 'center' }}>
          <h2>Weather Forecast for {selectedCity}</h2>
          <p>Temperature: {weather.data.list[0].main.temp} °C</p>
          <p>Humidity: {weather.data.list[0].main.humidity}%</p>
          <p>Weather: {weather.data.list[0].weather[0].description}</p>
        </div>
      </div>
    );
  };

  // Check if weather is in a loading state; display a loading spinner
  if (weather.loading) {
    return <div className="loader" style={{ textAlign: 'center' }}></div>;
  }

  // Check if there is an error in weather data; display an error message
  if (weather.error) {
    return <div className="container mt-4" id='error'>Error: {weather.error}</div>;
  }

  // Render weather data using the renderWeather function
  return <div>{renderWeather()}</div>;
};

export default WeatherDisplay;
