import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchWeatherData } from '../actions/current-weather-actions';

const SelectCity = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchWeatherData(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type='submit'>Get weather!</button>
      </form>
    </div>
  );
};

export default connect()(SelectCity);
