import { REQUEST_FORECAST_DATA, RECEIVE_FORECAST_DATA } from '../actions';

function forecastData(
  state = {
    isLoading: false,
    forecastData: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_FORECAST_DATA:
      return Object.assign({}, state, {
        isLoading: true
      });
    case RECEIVE_FORECAST_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        forecastData: action.forecastData
        // conditions: action.weatherData.weather[0],
        // temperature: action.weatherData.main,
        // wind: action.weatherData.wind
      });
    default:
      return state;
  }
}

export function forecastDataByCity(state = {}, action) {
  switch (action.type) {
    case REQUEST_FORECAST_DATA:
      return Object.assign({}, state, {
        [action.city]: forecastData(state[action.city], action)
      });
    case RECEIVE_FORECAST_DATA:
      const data = action.forecastData.list;
      const dates = [
        ...new Set(data.map(result => result.dt_txt.substring(0, 10)))
      ];
      const test = dates.values();
      return state;
    // Object.assign({}, state, {
    //   [action.city]:

    // {
    //   [dates]: action.forecastData.list.filter(
    //     data => data.dt_txt.substring(0, 10) === dates
    //   )
    // }
    // });

    // better: return Object.assign({}, state, {
    //   [action.city]: action.forecastData.list.map(data => {
    //     const date = data.dt_txt.substring(0, 10);
    //     return { [date]: forecastData(state[action.city], action) };
    //   })
    // });

    // return action.forecastData.list.map(data => {
    //   const date = data.dt_txt.substring(0, 10);
    //   return Object.assign({}, state, {
    //     [action.city]: { [date]: forecastData(state[action.city], action) }
    //   });
    // });
    default:
      return state;
  }
}

/**
 * 
 * return action.forecastData.list.map(data => {
 * const date = data.dt_txt.substring(0, 10)
 *  Object.assign({}, state, {
        [action.city]: {
          [date: forecastData(
            state[action.city],
            action
          )
        }
      });
 * })
 * 
 * 
 * 
 * for each in list pull out dt__txt every itemwith same DAY then key them inside LONDON and each DAY inside london is a rail of the forecast.
 * Potentially hide behind in one go expand, or see next day button
 */
