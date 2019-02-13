import { combineReducers } from 'redux';

import { SELECT_CITY } from '../actions';
import { weatherDataByCity } from './current-weather-reducer';
import { forecastDataByCity } from './5-day-forecast-reducers';

function selectedCity(state = 'London', action) {
  switch (action.type) {
    case SELECT_CITY:
      return action.city;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weatherDataByCity,
  selectedCity,
  forecastDataByCity
});

export default rootReducer;
