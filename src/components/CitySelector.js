import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity, fetchWeatherRequest } from '../redux/actions';

// Define a React functional component called CitySelector
const CitySelector = () => {
  // Access the selectedCity property from the Redux store
  const selectedCity = useSelector((state) => state.selectedCity);

  // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Event handler function for when the user selects a city from the dropdown
  const handleChange = (e) => {
    // Extract the selected value from the dropdown
    const { value } = e.target;

    // Dispatch the selectCity action to update the selected city in the Redux store
    dispatch(selectCity(value));

    // Construct the API URL based on the selected city and dispatch a fetchWeatherRequest action
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=4b50112e2568766f8726ba5187dcfd8a`; // Replace with your API key
    dispatch(fetchWeatherRequest(apiUrl));
  };

  // Render the component's UI
  return (
    <div className="container mt-4">
      <h1 className="text-center">Weather Forecast</h1>
      <div className="form-group">
        {/* Dropdown menu for city selection */}
        <select className="form-control" onChange={handleChange} value={selectedCity}>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik</option>
          <option value="Indore">Indore</option>
          <option value="Surat">Surat</option>
        </select>
      </div>
    </div>
  );
};

// Export the CitySelector component as the default export
export default CitySelector;
