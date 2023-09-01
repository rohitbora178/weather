// Define action types as constants
export const SELECT_CITY = 'SELECT_CITY';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

// Action creator for selecting a city
export const selectCity = (city) => ({
  type: SELECT_CITY,    // Action type
  payload: city,       // Data associated with the action
});

// Action creator for initiating a weather data request
export const fetchWeatherRequest = (apiUrl) => ({
  type: FETCH_WEATHER_REQUEST, // Action type
  payload: apiUrl,             // Data associated with the action (API URL)
});

// Action creator for successful weather data retrieval
export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS, // Action type
  payload: data,              // Data associated with the action (weather data)
});

// Action creator for weather data request failure
export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE, // Action type
  payload: error,             // Data associated with the action (error message)
});
