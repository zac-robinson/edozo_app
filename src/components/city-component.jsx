import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCityName = styled.h1`
  top: ${props => (props.length > 7 ? '25px' : '10px')};
  left: 25px;
  font-size: ${props => (props.length > 7 ? '22px' : '33px')};
  position: absolute;
`;

const City = ({ city }) => (
  <StyledCityName length={city.length}>{city}</StyledCityName>
);

City.propTypes = {
  city: PropTypes.string.isRequired
};

export default City;
