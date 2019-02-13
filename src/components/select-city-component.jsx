import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchWeatherData } from '../actions/current-weather-actions';

const StyledSubmitForm = styled.div`
  position: absolute;
  top: 230px;
  left: 80px;

  input {
    box-sizing: border-box;
    border: 3px solid #ccc;
    transition: 0.5s;
    outline: none;
    font-size: 20px;
    border-radius: 4px;
    margin-top: 2px;
  }

  input:focus {
    border: 3px solid #555;
  }

  button {
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
    border: 3px solid #008cba;
    border-radius: 4px;
  }

  button:hover {
    background-color: #008cba;
    color: white;
  }
`;

const SelectCity = ({ dispatch }) => {
  let input;
  return (
    <StyledSubmitForm>
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
    </StyledSubmitForm>
  );
};

SelectCity.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SelectCity);
