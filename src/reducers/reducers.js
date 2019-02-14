import { combineReducers } from 'redux';

import {
  SELECT_CITY,
  INCREMENT_DATE_INDEX,
  DECREMENT_DATE_INDEX,
  RESET_DATE_INDEX
} from '../actions';
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

function dateIndex(state = 0, action) {
  switch (action.type) {
    case INCREMENT_DATE_INDEX:
      return state > 4 ? state : state + 1;
    case DECREMENT_DATE_INDEX:
      return state < 1 ? state : state - 1;
    case RESET_DATE_INDEX:
      return 0;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weatherDataByCity,
  selectedCity,
  forecastDataByCity,
  dateIndex
});

export default rootReducer;
