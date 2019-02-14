import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChangeDate from './change-date-component';
import {
  ExpandedDate,
  Body,
  ForecastDiv,
  Time
} from '../styles/expanded-forecast.styles';

export class ExpandedForecast extends React.Component {
  state = {
    forecastDate: this.getForecastDate(),
    forecastData: this.getForecastData()
  };

  getForecastDate() {
    const { expandedForecast, dateIndex } = this.props;
    return Object.keys(expandedForecast)[dateIndex];
  }

  getForecastData() {
    const date = this.getForecastDate();
    return this.props.expandedForecast[date];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.dateIndex !== this.props.dateIndex ||
      (prevProps.isLoading && !this.props.isLoading)
    ) {
      this.setState({
        forecastData: this.getForecastData(),
        forecastDate: this.getForecastDate()
      });
    }
  }

  getTime(data) {
    return data.dt_txt.substring(11, 16);
  }

  render() {
    return (
      <div>
        <ExpandedDate>5 day forecast: {this.state.forecastDate}</ExpandedDate>
        <Body>
          {this.state.forecastData &&
            this.state.forecastData.map((data, index) => (
              <ForecastDiv key={index}>
                <Time>{this.getTime(data)}</Time>
                <div>
                  <img
                    src={buildImgURL(data.weather[0].icon)}
                    alt={data.weather[0].description}
                    height='50'
                    width='50'
                  />
                </div>
              </ForecastDiv>
            ))}
        </Body>
        <ChangeDate />
      </div>
    );
  }
}

ExpandedForecast.propTypes = {
  expandedForecast: PropTypes.object
};

export default ExpandedForecast;

const buildImgURL = imageName => {
  return `http://openweathermap.org/img/w/${imageName}.png`;
};
