import { REQUEST_WEATHER_DATA, RECEIVE_WEATHER_DATA } from '../actions';
import { REFRESH_WEATHER_DATA } from '../actions/current-weather-actions';

function weatherData(
  state = {
    isLoading: false,
    shouldRefresh: false,
    conditions: {},
    temperature: {},
    wind: {}
  },
  action
) {
  switch (action.type) {
    case REFRESH_WEATHER_DATA:
      return Object.assign({}, state, { shouldRefresh: true });
    case REQUEST_WEATHER_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        shouldRefresh: false
      });
    case RECEIVE_WEATHER_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        shouldRefresh: false,
        conditions: action.weatherData.weather[0],
        temperature: action.weatherData.main,
        wind: action.weatherData.wind
      });
    default:
      return state;
  }
}

export function weatherDataByCity(state = {}, action) {
  switch (action.type) {
    case REFRESH_WEATHER_DATA:
    case REQUEST_WEATHER_DATA:
    case RECEIVE_WEATHER_DATA:
      return Object.assign({}, state, {
        [action.city]: weatherData(state[action.city], action)
      });
    default:
      return state;
  }
}
