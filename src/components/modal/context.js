import React from 'react';

class Provider extends React.Component {
  state = {
    content: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal,
  };

  showModal = (content, props = {}) => {
    this.setState({
      content,
      props,
    });
  };

  hideModal = () => this.setState({
    content: null,
    props: {},
  });

  render() {
    const { children } = this.props;
    const { content } = this.state;
    const ModalContent = content;

    return (
      <ModalContext.Provider value={this.state}>
        {children}
        {ModalContent ? <Modal content={ModalContent} /> : ''}
      </ModalContext.Provider>
    );
  }
}

export default Provider;
