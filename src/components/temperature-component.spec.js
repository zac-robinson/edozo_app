import React from 'react';
import { shallow } from 'enzyme';

import Temperature from './temperature-component';

describe('Temperature component', () => {
  it('should render correctly', () => {
    const temperatureProp = {
      temp: '15',
      temp_max: '45555',
      temp_min: '-1222'
    };
    const component = shallow(<Temperature temperature={temperatureProp} />);

    expect(component).toMatchSnapshot();
  });
});
