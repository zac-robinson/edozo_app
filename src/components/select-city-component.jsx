import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchWeatherData } from '../actions/current-weather-actions';
import { SubmitForm, TextBox, SubmitBtn } from '../styles/select-city.styles';

const SelectCity = ({ dispatch }) => {
  let input;
  return (
    <SubmitForm>
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
        <TextBox ref={node => (input = node)} />
        <SubmitBtn type='submit'>Get Weather!</SubmitBtn>
      </form>
    </SubmitForm>
  );
};

SelectCity.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SelectCity);
