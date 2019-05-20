import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`${({ type, theme }) => css`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  font-size: 18px;
  background-color: ${type === 'secondary' ? theme.color.secondary : theme.color.primary};
  color: ${type === 'secondary' ? theme.color.primary : theme.color.secondary};
  border: ${type === 'secondary' ? `2px solid ${theme.color.primary}` : 'none'};;
  &:hover {
    background-color: ${type === 'secondary' ? theme.color.secondaryHover : theme.color.primaryHover};
    cursor: pointer;
  }
`}`;

Button.propTypes = {
  /** Defines the background and the border color */
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  type: 'primary',
};

/** @component */
export default Button;
