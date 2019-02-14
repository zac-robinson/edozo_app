import { weatherDataByCity } from './current-weather-reducer';
import { REQUEST_WEATHER_DATA, RECEIVE_WEATHER_DATA } from '../actions';

describe('weatherDataByCity reducer', () => {
  it('should handle initial state', () => {
    expect(weatherDataByCity({}, {})).toEqual({});
  });

  it('should set isLoading true when REQUEST_WEATHER_DATA action', () => {
    const action = {
      type: REQUEST_WEATHER_DATA,
      city: 'York'
    };

    const expectedState = {
      York: {
        isLoading: true,
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
