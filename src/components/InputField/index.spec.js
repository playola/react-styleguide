import React from 'react';
import { shallow } from 'enzyme';
import InputField from './index';

describe('InputField component', () => {
  const wrapper = shallow(<InputField />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
