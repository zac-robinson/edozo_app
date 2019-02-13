import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import WeatherWidgetHeader from './weather-widget-header-component';
import SelectCity from './select-city-component'

const StyledWidget = styled.div`
  height: 200px;
  width: 500px;
  border: solid 2px blue;
`;

const WeatherWidget = ({ city, conditions, temperature, wind }) => (
  <StyledWidget>
    <WeatherWidgetHeader
      city={city}
      temperature={temperature}
      wind={wind}
      conditions={conditions}
    />
<SelectCity />
  </StyledWidget>
);

WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
  conditions: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    main: PropTypes.string,
    description: PropTypes.string.isRequired
  }).isRequired,
  temperature: PropTypes.shape({
    temp_max: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
    temp_min: PropTypes.string.isRequired
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    deg: PropTypes.number.isRequired
  }).isRequired
};

export default WeatherWidget;
