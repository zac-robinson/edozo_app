import React from 'react';
import PropTypes from 'prop-types';

import { CityName } from '../styles/city.styles';

const City = ({ city }) => <CityName length={city.length}>{city}</CityName>;

City.propTypes = {
  city: PropTypes.string.isRequired
};

export default City;
