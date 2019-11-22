import React from 'react';
import PropTypes from 'prop-types';
import { RadioWrapper, StyledRadio } from './styles';

const Radio = ({ id, checked, label }) => (
  <RadioWrapper>
    <label htmlFor={`radio-${id}`}>{label}</label>
    <StyledRadio
      id={`radio-${id}`}
      type="radio"
      checked={checked}
      readOnly
    />
  </RadioWrapper>
);

Radio.propTypes = {
  /** Id to match that reference to the label */
  id: PropTypes.string,
  /** Defines the checked state of the radio */
  checked: PropTypes.bool,
  /** Label of the radio */
  label: PropTypes.string,
};

Radio.defaultProps = {
  id: 'component',
  checked: false,
  label: '',
};

export default Radio;
