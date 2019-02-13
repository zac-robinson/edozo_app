import * as actions from './common-actions';

describe('common actions', () => {
  it('requestWeatherData should create REQUEST_WEATHER_DATA action', () => {
    expect(actions.requestWeatherData('London')).toEqual({
      type: 'REQUEST_WEATHER_DATA',
      city: 'London'
    });
  });

  it('receiveWeatherData should create RECEIVE_WEATHER_DATA action', () => {
    const json = {
      test: 'test this param'
    };
    expect(actions.receiveWeatherData('London', json)).toEqual({
      type: 'RECEIVE_WEATHER_DATA',
      city: 'London',
      weatherData: json
    });
  });

  it('requestForecastData should create REQUEST_FORECAST_DATA action', () => {
    expect(actions.requestForecastData('Delhi')).toEqual({
      type: 'REQUEST_FORECAST_DATA',
      city: 'Delhi'
    });
  });

  it('receiveForecastData should create RECEIVE_FORECAST_DATA action', () => {
    const json = {
      test: 'some forecast data'
    };

    expect(actions.receiveForecastData('Delhi', json)).toEqual({
      type: 'RECEIVE_FORECAST_DATA',
      city: 'Delhi',
      forecastData: json
    });
  });

  it('selectCity should create SELECT_CITY action', () => {
    expect(actions.selectCity('Tokyo')).toEqual({
      type: actions.SELECT_CITY,
      city: 'Tokyo'
    });
  });
});
