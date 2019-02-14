import { REQUEST_WEATHER_DATA, RECEIVE_WEATHER_DATA } from '../actions';

function weatherData(
  state = {
    isLoading: false,
    conditions: {},
    temperature: {},
    wind: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_WEATHER_DATA:
      return Object.assign({}, state, {
        isLoading: true
      });
    case RECEIVE_WEATHER_DATA:
      return Object.assign({}, state, {
        isLoading: false,
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
    case REQUEST_WEATHER_DATA:
    case RECEIVE_WEATHER_DATA:
      return Object.assign({}, state, {
        [action.city]: weatherData(state[action.city], action)
      });
    default:
      return state;
  }
}
