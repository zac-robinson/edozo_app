import {
  mapStateToProps,
  mapDispatchToProps
} from './weather-widget-container';
import * as actions from '../actions/current-weather-actions';
import { SELECT_CITY } from '../actions/common-actions';

describe('Weather widget container', () => {
  it('should mapStateToProps correctly', () => {
    const initialState = {
      selectedCity: 'Metropolis',
      weatherDataByCity: {
        Metropolis: {
          conditions: {
            id: 12,
            main: 'Sun',
            description: 'blue skies!',
            icon: 'test-icon'
          },
          temperature: {
            temp: 1300,
            pressure: 12,
            humidity: 88888,
            temp_min: 1301,
            temp_max: 1299
          },
          wind: {
            speed: 70,
            deg: 230
          }
        }
      }
    };

    expect(mapStateToProps(initialState)).toEqual({
      city: 'Metropolis',
      conditions: {
        id: 12,
        main: 'Sun',
        description: 'blue skies!',
        icon: 'test-icon'
      },
      temperature: {
        temp: '1026.8',
        pressure: 12,
        humidity: 88888,
        temp_min: '1027.8',
        temp_max: '1025.8'
      },
      wind: {
        speed: 70,
        deg: 230
      }
    });
  });

  it('should dispatch select city action when the city is selected', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).selectCity('Gotham');
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: SELECT_CITY,
      city: 'Gotham'
    });
  });

  it('should dispatch select city when the city is selected', () => {
    const dispatch = jest.fn();
    const fetchWeatherMock = jest.spyOn(actions, 'fetchWeatherData');

    mapDispatchToProps(dispatch).fetchWeatherData('Gotham');
    expect(fetchWeatherMock).toHaveBeenCalledWith('Gotham');
  });
});
