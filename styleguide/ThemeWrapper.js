import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/style/theme';

const ThemeWrapper = React.memo(({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
));

ThemeWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ThemeWrapper;
