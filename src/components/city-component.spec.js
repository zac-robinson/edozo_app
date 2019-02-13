import React from 'react';
import { shallow } from 'enzyme';

import City from './city-component';

describe('City component', () => {
  it('should render correctly', () => {
    const component = shallow(<City city='city name' />);

    expect(component).toMatchSnapshot();
  });
});
