import styled from 'styled-components';

export const RadioWrapper = styled.div`
  width: 100%;
`;

export const StyledRadio = styled.input`
  position: relative;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  width: 16px;
  height: 16px;

  &:checked:after {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: close-quote;
    background-color: ${({ theme }) => theme.color.primary};
    left: 2px;
    top: 2px;
  }
`;
