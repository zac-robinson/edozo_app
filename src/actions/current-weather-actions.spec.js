import {
  refreshWeatherData,
  REFRESH_WEATHER_DATA
} from './current-weather-actions';
import { SELECT_CITY, selectCity } from './common-actions';

describe('current weather actions', () => {
  it('selectCity should create SELECT_CITY action', () => {
    expect(selectCity('Tokyo')).toEqual({
      type: SELECT_CITY,
      city: 'Tokyo'
    });
  });

  it('refreshWeatherData should create REFRESH_WEATHER_DATA action', () => {
    expect(refreshWeatherData('Paris')).toEqual({
      type: REFRESH_WEATHER_DATA,
      city: 'Paris'
    });
  });
});
