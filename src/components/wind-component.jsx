import React from 'react';
import PropTypes from 'prop-types';
import { WindInfo } from '../styles/wind.styles';

const Wind = ({ wind }) => (
  <WindInfo>
    Wind speed: {wind.speed} m/s <br />
    {wind.deg && <span>Wind direction: {windDirection(wind.deg)}</span>}
  </WindInfo>
);

Wind.propTypes = {
  wind: PropTypes.shape({
    speed: PropTypes.number,
    deg: PropTypes.number.isRequired
  }).isRequired
};

export default Wind;

const windDirection = degrees => {
  const compassPoints = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const direction = (degrees / 45).toFixed(0);

  return compassPoints[direction % compassPoints.length];
};
