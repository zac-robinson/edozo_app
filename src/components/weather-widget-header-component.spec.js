import React from 'react';
import { shallow } from 'enzyme';

import WeatherWidgetHeader from './weather-widget-header-component';

describe('WeatherWidgetHeader component', () => {
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
        icon: 'sun'
      }
    };
    const component = shallow(<WeatherWidgetHeader {...props} />);

    expect(component).toMatchSnapshot();
  });
});
