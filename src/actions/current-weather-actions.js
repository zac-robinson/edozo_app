import fetch from 'cross-fetch';

import {
  requestWeatherData,
  receiveWeatherData,
  selectCity
} from './common-actions';

export const REFRESH_WEATHER_DATA = 'REFRESH_WEATHER_DATA';

export function refreshWeatherData(city) {
  return {
    type: REFRESH_WEATHER_DATA,
    city
  };
}

export function callWeatherDataAPI(city) {
  return dispatch => {
    dispatch(selectCity(city));
    dispatch(requestWeatherData(city));
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=988dcd5b250ea16e54ecd252ada3aef6`
    )
      .then(response => response.json())
      .then(json => dispatch(receiveWeatherData(city, json)));
  };
}

export function shouldFetchWeatherData(state, city) {
  const weatherData = state.weatherDataByCity[city];

  if (!weatherData) {
    return true;
  } else if (weatherData.isLoading) {
    return false;
  } else {
    return weatherData.shouldRefresh;
  }
}

export function fetchWeatherData(city) {
  return (dispatch, getState) => {
    if (shouldFetchWeatherData(getState(), city)) {
      return dispatch(callWeatherDataAPI(city));
    } else {
      return Promise.resolve();
    }
  };
}
