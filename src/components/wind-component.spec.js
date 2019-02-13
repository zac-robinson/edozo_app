import React from 'react';
import { shallow } from 'enzyme';

import Wind from './wind-component';

describe('Wind component', () => {
  it('should render correctly when straight on wind', () => {
    const windProp = {
      speed: 50,
      deg: 0
    };
    const component = shallow(<Wind wind={windProp} />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly when wind is at angle', () => {
    const windProp = {
      speed: 50,
      deg: 254
    };
    const component = shallow(<Wind wind={windProp} />);

    expect(component).toMatchSnapshot();
  });
});
