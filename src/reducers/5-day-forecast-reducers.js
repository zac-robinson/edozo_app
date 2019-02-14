import { REQUEST_FORECAST_DATA, RECEIVE_FORECAST_DATA } from '../actions';

function forecastData(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FORECAST_DATA:
      const forecastData = action.forecastData.list;
      let gatheredData = {};
      forecastData.map(data => {
        const key = data.dt_txt.substring(0, 10);
        if (!(key in gatheredData)) {
          return (gatheredData[key] = [data]);
        } else {
          return gatheredData[key].push(data);
        }
      });
      return Object.assign({}, state, gatheredData);
    default:
      return state;
  }
}

export function forecastDataByCity(state = {}, action) {
  switch (action.type) {
    case REQUEST_FORECAST_DATA:
      return Object.assign({}, state, {
        [action.city]: forecastData(state[action.city], action),
        isLoading: true
      });
    case RECEIVE_FORECAST_DATA:
      return Object.assign({}, state, {
        [action.city]: forecastData(state[action.city], action),
        isLoading: false
      });
    default:
      return state;
  }
}
