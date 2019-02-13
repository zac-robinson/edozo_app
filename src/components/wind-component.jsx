import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWindInfo = styled.div`
  top: 40px;
  left: 330px;
  font-size: 14px;
  position: absolute;
`;

const Wind = ({ wind }) => (
  <StyledWindInfo>
    Wind speed: {wind.speed} m/s <br />
    {wind.deg && <span>Wind direction: {windDirection(wind.deg)}</span>}
  </StyledWindInfo>
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
