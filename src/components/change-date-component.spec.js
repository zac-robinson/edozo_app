import React from 'react';
import { shallow } from 'enzyme';

import { ChangeDate } from './change-date-component';

describe('ChangeDate component', () => {
  it('should render correctly', () => {
    const props = {
      incrementDateIndex: () => {},
      decrementDateIndex: () => {}
    };
    expect(shallow(<ChangeDate {...props} />)).toMatchSnapshot();
  });
});
