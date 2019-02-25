import React from 'react';
import { shallow } from 'enzyme';
import Portal from './index';

describe('Portal component', () => {
  const wrapper = shallow(<Portal />);

  it('should mount', () => expect(wrapper).toBeDefined());
});
