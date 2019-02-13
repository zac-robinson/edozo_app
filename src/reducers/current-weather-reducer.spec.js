import { weatherDataByCity } from './current-weather-reducer';
import { REFRESH_WEATHER_DATA } from '../actions/current-weather-actions';
import { REQUEST_WEATHER_DATA, RECEIVE_WEATHER_DATA } from '../actions';

describe('weatherDataByCity reducer', () => {
  it('should handle initial state', () => {
    expect(weatherDataByCity({}, {})).toEqual({});
  });

  it('should tell the data to refresh if REFRESH_WEATHER_DATA action', () => {
    const action = {
      type: REFRESH_WEATHER_DATA,
      city: 'Nottingham'
    };

    const expectedState = {
      Nottingham: {
        isLoading: false,
        shouldRefresh: true,
        conditions: {},
        temperature: {},
        wind: {}
      }
    };

    expect(weatherDataByCity({}, action)).toEqual(expectedState);
  });

  it('should set isLoading true and shouldRefresh false when REQUEST_WEATHER_DATA action', () => {
    const action = {
      type: REQUEST_WEATHER_DATA,
      city: 'York'
    };

    const expectedState = {
      York: {
        isLoading: true,
        shouldRefresh: false,
        conditions: {},
        temperature: {},
        wind: {}
      }
    };

    expect(weatherDataByCity({}, action)).toEqual(expectedState);
  });

  it('should set the action data if RECEIVE_WEAHTER_DATA action', () => {
    const action = {
      type: RECEIVE_WEATHER_DATA,
      city: 'Madrid',
      weatherData: {
        weather: [
          {
            data: 'test weather data'
          }
        ],
        main: {
          data: 'main is temperature'
        },
        wind: {
          data: 'windy!'
        }
      }
    };

    const expectedState = {
      Madrid: {
        isLoading: false,
        shouldRefresh: false,
        conditions: {
          data: 'test weather data'
        },
        temperature: {
          data: 'main is temperature'
        },
        wind: {
          data: 'windy!'
        }
      }
    };

    expect(weatherDataByCity({}, action)).toEqual(expectedState);
  });
});
