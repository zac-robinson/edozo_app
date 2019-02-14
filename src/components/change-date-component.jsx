import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  incrementDateIndex,
  decrementDateIndex
} from '../actions/common-actions';

const ButtonGroup = styled.div`
  position: absolute;
  left: 107px;
  top: 180px;
`;

const DateButton = styled.button`
  padding: 5px 7px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 2px 15px 4px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 3px solid #4caf50;
  border-radius: 4px;
  outline: none;

  :hover {
    background-color: #4caf50;
    color: white;
  }
`;

export class ChangeDate extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <DateButton onClick={this.props.decrementDateIndex}>
          Previous Day
        </DateButton>
        <DateButton onClick={this.props.incrementDateIndex}>
          Next Day
        </DateButton>
      </ButtonGroup>
    );
  }
}

ChangeDate.propTypes = {
  incrementDateIndex: PropTypes.func.isRequired,
  decrementDateIndex: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => {
  return {
    incrementDateIndex: () => dispatch(incrementDateIndex()),
    decrementDateIndex: () => dispatch(decrementDateIndex())
  };
};

const mapStateToProps = ({ selectedCity, forecastDataByCity, dateIndex }) => {
  return {
    dateIndex,
    numDays: Object.keys(forecastDataByCity[selectedCity]).length
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeDate);
