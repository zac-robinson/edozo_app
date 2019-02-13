import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledConditions = styled.div`
  font-size: 16px;
  position: absolute;
  left: 150px;
  top: 20px;
  display: inline-block;
  text-align: center;

  .description {
    display: block;
  }
`;

const Conditions = ({ conditions }) => (
  <StyledConditions>
    <img
      src={buildImgURL(conditions.icon)}
      alt={conditions.main}
      height='50'
      width='50'
    />
    <span className='description'>{conditions.description}</span>
  </StyledConditions>
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
