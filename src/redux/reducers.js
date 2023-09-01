import { combineReducers } from 'redux';

// Define action types
import {
  SELECT_CITY,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './actions';

// Reducer for selectedCity state
const selectedCityReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_CITY:
      return action.payload; // Set the selectedCity state to the value passed in the action payload
    default:
      return state; // Return the current state by default
  }
};

// Reducer for weather state
const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true, error: null }; // Set loading to true and clear any previous error
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null }; // Set loading to false, store the fetched data, and clear any error
    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload }; // Set loading to false and store the error message
    default:
      return state; // Return the current state by default
  }
};

// Combine the reducers into a single reducer object
export default combineReducers({
  selectedCity: selectedCityReducer, // Store selected city state using selectedCityReducer
  weather: weatherReducer, // Store weather data and loading state using weatherReducer
});
