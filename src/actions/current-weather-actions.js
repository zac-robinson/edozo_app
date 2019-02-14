import fetch from 'cross-fetch';

import {
  requestWeatherData,
  receiveWeatherData,
  selectCity,
  resetDateIndex
} from './common-actions';
import { callForecastDataAPI } from './five-day-forecast-actions';

export function callWeatherDataAPI(city) {
  return async dispatch => {
    dispatch(resetDateIndex());
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
    dispatch(callWeatherDataAPI(city));
    return dispatch(callForecastDataAPI(city));
  };
}
