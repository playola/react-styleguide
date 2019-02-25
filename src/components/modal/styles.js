import styled from 'styled-components';

export const OuterWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.2;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 4px;
`;
