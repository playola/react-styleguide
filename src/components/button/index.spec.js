import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button component', () => {
  const wrapper = shallow(<Button />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
