import React from 'react';
import { shallow } from 'enzyme';

import WeatherWidget from './weather-widget-component';

describe('WeatherWidget component', () => {
  it('should render correctly', () => {
    const props = {
      city: 'York',
      temperature: {
        temp: '45'
      },
      wind: {
        speed: 3444
      },
      conditions: {
        icon: 'raining'
      }
    };
    const component = shallow(<WeatherWidget {...props} />);

    expect(component).toMatchSnapshot();
  });
});
