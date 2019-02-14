export const REQUEST_WEATHER_DATA = 'REQUEST_WEATHER_DATA';
export const RECEIVE_WEATHER_DATA = 'RECEIVE_WEATHER_DATA';
export const REQUEST_FORECAST_DATA = 'REQUEST_FORECAST_DATA';
export const RECEIVE_FORECAST_DATA = 'RECEIVE_FORECAST_DATA';
export const SELECT_CITY = 'SELECT_CITY';
export const INCREMENT_DATE_INDEX = 'INCREMENT_DATE_INDEX';
export const DECREMENT_DATE_INDEX = 'DECREMENT_DATE_INDEX';
export const RESET_DATE_INDEX = 'RESET_DATE_INDEX';

export function requestWeatherData(city) {
  return {
    type: REQUEST_WEATHER_DATA,
    city
  };
}

export function receiveWeatherData(city, json) {
  return {
    type: RECEIVE_WEATHER_DATA,
    city,
    weatherData: json
  };
}

export function requestForecastData(city) {
  return {
    type: REQUEST_FORECAST_DATA,
    city
  };
}

export function receiveForecastData(city, json) {
  return {
    type: RECEIVE_FORECAST_DATA,
    city,
    forecastData: json
  };
}

export function selectCity(city) {
  return {
    type: SELECT_CITY,
    city
  };
}

export function incrementDateIndex() {
  return {
    type: INCREMENT_DATE_INDEX
  };
}

export function decrementDateIndex() {
  return {
    type: DECREMENT_DATE_INDEX
  };
}

export function resetDateIndex() {
  return {
    type: RESET_DATE_INDEX
  };
}
