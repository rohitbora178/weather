import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_WEATHER_REQUEST,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from './actions';

// Generator function for fetching weather data
function* fetchWeather(action) {
  try {
    // Use the 'call' effect to make an asynchronous API request using axios
    const { data } = yield call(axios.get, action.payload);

    // Dispatch the 'fetchWeatherSuccess' action with the fetched data
    yield put(fetchWeatherSuccess(data));
  } catch (error) {
    // If an error occurs during the API request, dispatch the 'fetchWeatherFailure' action
    yield put(fetchWeatherFailure(error.message));
  }
}

// Generator function to watch for FETCH_WEATHER_REQUEST actions
function* watchWeatherFetchRequest() {
  // Use 'takeLatest' to ensure that only the latest FETCH_WEATHER_REQUEST action is handled
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

// Root saga function that combines all sagas
export default function* rootSaga() {
  // Start watching for FETCH_WEATHER_REQUEST actions
  yield watchWeatherFetchRequest();
}
