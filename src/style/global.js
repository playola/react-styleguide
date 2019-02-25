import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    min-width: 320px;
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.black};
  }

  span {
    color: ${({ theme }) => theme.black};
    font-size: 16px;
  }
`;
