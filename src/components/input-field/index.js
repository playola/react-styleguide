import React from 'react';
import PropTypes from 'prop-types';
import {
  InputFieldWrapper,
  Input,
  FloatingLabel,
} from './styles';

const InputField = ({
  placeholder,
  type,
  pattern,
  minLength,
  maxLength,
  ...props
}) => (
  <InputFieldWrapper>
    <Input
      type={type}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      required
      {...props}
    />
    <FloatingLabel>{ placeholder }</FloatingLabel>
  </InputFieldWrapper>
);

InputField.propTypes = {
  /** Placeholder */
  placeholder: PropTypes.string,
  /** Input type */
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'tel']),
  /** Regexp pattern */
  pattern: PropTypes.string,
  /** Minimum field length */
  minLength: PropTypes.string,
  /** Maximum field length */
  maxLength: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: 'Input',
  type: 'text',
  pattern: '.*',
  minLength: '1',
  maxLength: '20',
};

export default InputField;
