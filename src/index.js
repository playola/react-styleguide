import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyle } from './style/global';

const AppProvider = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <div>
        Welcome to React Styleguide :)
      </div>
    </React.Fragment>
  </ThemeProvider>
);

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root'),
);
