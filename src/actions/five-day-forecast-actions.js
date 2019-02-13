import fetch from 'cross-fetch';

import { requestForecastData, receiveForecastData } from './common-actions';

function callForecastDataAPI(city) {
  return dispatch => {
    dispatch(requestForecastData(city));
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=988dcd5b250ea16e54ecd252ada3aef6`
    )
      .then(response => response.json())
      .then(json => dispatch(receiveForecastData(city, json)));
  };
}

function shouldFetchForecastData(state, city) {
  const forecastData = state.forecastDataByCity[city];

  if (!forecastData) {
    return true;
  } else if (forecastData.isLoading) {
    return false;
  } else {
    return forecastData.shouldRefresh;
  }
}

export function fetchForecastData(city) {
  console.log('forecast time');
  return (dispatch, getState) => {
    if (shouldFetchForecastData(getState(), city)) {
      return dispatch(callForecastDataAPI(city));
    } else {
      return Promise.resolve();
    }
  };
}
