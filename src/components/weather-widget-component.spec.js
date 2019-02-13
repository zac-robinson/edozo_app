import React from 'react';
import { shallow } from 'enzyme';

import WeatherWidget from './weather-widget-component';

describe('WeatherWidget component', () => {
  it('should render correctly', () => {
    const props = {
      city: {
        name: 'York'
      },
      temperature: {
        temp: 45
      },
      wind: {
        speed: 3444
      },
      conditions: {
        description: 'still raining'
      }
    };
    const component = shallow(<WeatherWidget {...props} />);

    expect(component).toMatchSnapshot();
  });
});
