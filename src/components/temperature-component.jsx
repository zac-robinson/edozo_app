import React from 'react';
import PropTypes from 'prop-types';

import { TemperatureInfo, CurrentTemp } from '../styles/temperature.styles';

const Temperature = ({ temperature }) => (
  <TemperatureInfo>
    High: {temperature.temp_max}
    <CurrentTemp>{temperature.temp}</CurrentTemp>
    Low: {temperature.temp_min}
  </TemperatureInfo>
);

Temperature.propTypes = {
  temperature: PropTypes.shape({
    temp_max: PropTypes.string,
    temp: PropTypes.string.isRequired,
    temp_min: PropTypes.string
  }).isRequired
};

export default Temperature;
