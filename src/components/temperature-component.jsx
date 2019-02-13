import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTemperature = styled.div`
  font-size: 12px;
  position: absolute;
  left: 270px;
  top: 20px;
  .current_temp {
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const Temperature = ({ temperature }) => (
  <StyledTemperature>
    High: {temperature.temp_max}
    <h1 className='current_temp'>{temperature.temp}</h1>
    Low: {temperature.temp_min}
  </StyledTemperature>
);

Temperature.propTypes = {
  temperature: PropTypes.shape({
    temp_max: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
    temp_min: PropTypes.string.isRequired
  }).isRequired
};

export default Temperature;
