/*
import React from 'react';
import ReactDOM from 'react-dom';
import { OuterWrapper, PortalWrapper } from './styles';

const Portal = ({ children }) => (
  ReactDOM.createPortal(
    <React.Fragment>
      <OuterWrapper />
      <PortalWrapper>
        {children}
      </PortalWrapper>
    </React.Fragment>,
    document.body,
  )
);

export default Portal;
*/

import React from 'react';
import { ModalConsumer } from './context';

const Modal = () => (
  <ModalConsumer>
    {({ component: Component, props, hideModal }) => (
      Component ? <Component {...props} onRequestClose={hideModal} /> : null
    )}
  </ModalConsumer>
);

export default Modal;
