import React from 'react';
import PropTypes from 'prop-types';

import WeatherWidgetHeader from './weather-widget-header-component';
import SelectCity from './select-city-component';
import { Widget } from '../styles/weather-widget.styles';

const WeatherWidget = ({ city, conditions, temperature, wind, children }) => (
  <Widget>
    <WeatherWidgetHeader
      city={city}
      temperature={temperature}
      wind={wind}
      conditions={conditions}
    />
    {children}
    <SelectCity />
  </Widget>
);

WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
  conditions: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    main: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  temperature: PropTypes.shape({
    temp_max: PropTypes.string,
    temp: PropTypes.string.isRequired,
    temp_min: PropTypes.string
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    deg: PropTypes.number
  }).isRequired
};

export default WeatherWidget;
