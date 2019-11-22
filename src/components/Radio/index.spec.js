import React from 'react';
import { shallow } from 'enzyme';
import Radio from './index';

describe('Radio component', () => {
  const wrapper = shallow(<Radio />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
