import React from 'react';
import { shallow } from 'enzyme';

import Conditions from './conditions-component';

describe('Conditions component', () => {
  it('should render correctly', () => {
    const conditionsProp = {
      icon: 'testIcon',
      main: 'name of icon',
      description: 'its probably raining'
    };
    const component = shallow(<Conditions conditions={conditionsProp} />);

    expect(component).toMatchSnapshot();
  });
});
