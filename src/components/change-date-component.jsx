import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  incrementDateIndex,
  decrementDateIndex
} from '../actions/common-actions';
import { ButtonGroup, DateButton } from '../styles/change-date.styles';

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
