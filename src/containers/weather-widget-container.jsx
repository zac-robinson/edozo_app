import { connect } from 'react-redux';

import WeatherWidget from '../components/weather-widget-component';
import { fetchWeatherData } from '../actions/current-weather-actions';
import { selectCity } from '../actions/common-actions';

const KELVIN_CONVERSION = 273.15;

const tempToCelcius = temperatureData => {
  if (!temperatureData) return;
  return {
    ...temperatureData,
    temp: (temperatureData.temp - KELVIN_CONVERSION).toFixed(1),
    temp_min: (temperatureData.temp_min - KELVIN_CONVERSION).toFixed(1),
    temp_max: (temperatureData.temp_max - KELVIN_CONVERSION).toFixed(1)
  };
};

export const mapStateToProps = ({ selectedCity, weatherDataByCity }) => {
  return {
    city: selectedCity,
    conditions: weatherDataByCity[selectedCity].conditions,
    temperature: tempToCelcius(weatherDataByCity[selectedCity].temperature),
    wind: weatherDataByCity[selectedCity].wind
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    selectCity: city => dispatch(selectCity(city)),
    fetchWeatherData: city => dispatch(fetchWeatherData(city))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherWidget);
