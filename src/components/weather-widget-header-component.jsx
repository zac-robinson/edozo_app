import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import City from './city-component';
import Temperature from './temperature-component';
import Wind from './wind-component';
import Conditions from './conditions-component';

const StyledHeader = styled.div`
  border-bottom: solid 2px grey;
  width: 100%;
  height: 90px;
  border-radius: 8px;
  background-color: #008cba;
  color: white;
`;

const WeatherWidgetHeader = ({ city, temperature, wind, conditions }) => (
  <StyledHeader>
    <City city={city} />
    <Temperature temperature={temperature} />
    <Wind wind={wind} />
    <Conditions conditions={conditions} />
  </StyledHeader>
);

WeatherWidgetHeader.propTypes = {
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

export default WeatherWidgetHeader;
