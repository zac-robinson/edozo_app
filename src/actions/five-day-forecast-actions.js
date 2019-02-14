import fetch from 'cross-fetch';

import { requestForecastData, receiveForecastData } from './common-actions';

export function callForecastDataAPI(city) {
  return dispatch => {
    dispatch(requestForecastData(city));
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=988dcd5b250ea16e54ecd252ada3aef6`
    )
      .then(response => response.json())
      .then(json => dispatch(receiveForecastData(city, json)));
  };
}

export function fetchForecastData(city) {
  return dispatch => {
    return dispatch(callForecastDataAPI(city));
  };
}
