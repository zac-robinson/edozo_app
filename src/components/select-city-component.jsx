import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchWeatherData } from '../actions/current-weather-actions';

const StyledSubmitForm = styled.div`
  position: absolute;
  top: 220px;
  left: 80px;
`;

const StyledTextBox = styled.input`
  box-sizing: border-box;
  border: 3px solid #ccc;
  transition: 0.5s;
  outline: none;
  font-size: 20px;
  border-radius: 4px;
  margin-top: 2px;

  :focus {
    border: 3px solid #555;
  }
`;

const StyledSubmitButton = styled.button`
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
  outline: none;

  :hover {
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
        <StyledTextBox ref={node => (input = node)} />
        <StyledSubmitButton type='submit'>Get weather!</StyledSubmitButton>
      </form>
    </StyledSubmitForm>
  );
};

SelectCity.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SelectCity);
