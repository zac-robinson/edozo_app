import React from 'react';

import WeatherWidget from '../containers/weather-widget-container';
import ExpandedForecast from '../containers/five-day-forecast-container';

const App = () => (
  <React.Fragment>
    <WeatherWidget>
      <ExpandedForecast />
    </WeatherWidget>
  </React.Fragment>
);

export default App;
