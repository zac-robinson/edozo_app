import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCityName = styled.h1`
  top: 10px;
  left: 25px;
  font-size: 33px;
  position: absolute;
`;

const City = ({ city }) => <StyledCityName>{city}</StyledCityName>;

City.propTypes = {
  city: PropTypes.string.isRequired
};

export default City;
