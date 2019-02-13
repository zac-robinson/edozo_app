import React from 'react';
import { shallow } from 'enzyme';

import SelectCity from './select-city-component';

describe('SelectCity component', () => {
  it('should render correctly', () => {
    const dispatchProp = () => {};
    const component = shallow(<SelectCity dispatch={dispatchProp} />);

    expect(component).toMatchSnapshot();
  });
});
