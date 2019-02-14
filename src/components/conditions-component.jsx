import React from 'react';
import PropTypes from 'prop-types';

import {
  ConditionGroup,
  ConditionDescription
} from '../styles/conditions.styles';

const Conditions = ({ conditions }) => (
  <ConditionGroup>
    <img
      src={buildImgURL(conditions.icon)}
      alt={conditions.main}
      height='50'
      width='50'
    />
    <ConditionDescription>{conditions.description}</ConditionDescription>
  </ConditionGroup>
);

Conditions.propTypes = {
  conditions: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    main: PropTypes.string,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Conditions;

const buildImgURL = imageName => {
  return `http://openweathermap.org/img/w/${imageName}.png`;
};
