import fetch from 'cross-fetch';

import {
  requestWeatherData,
  receiveWeatherData,
  selectCity
} from './common-actions';

export const REFRESH_WEATHER_DATA = 'REFRESH_WEATHER_DATA';

export function callWeatherDataAPI(city) {
  return async dispatch => {
    dispatch(selectCity(city));
    dispatch(requestWeatherData(city));
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=988dcd5b250ea16e54ecd252ada3aef6`
    );
    const json = await response.json();
    return dispatch(receiveWeatherData(city, json));
  };
}

export function fetchWeatherData(city) {
  return dispatch => {
    return dispatch(callWeatherDataAPI(city));
  };
}
