```js
  import React from 'react';
  import { ModalProvider, ModalConsumer } from './context';
  import ModalRoot from './index';

  const renderContent = () => (
    <div>
      Modal example
    </div>
  );
  const handleOnClick = () => console.log('Open Modal');

  <React.Fragment>
    <ModalProvider>
      <ModalRoot />
      <ModalConsumer>
        {({ showModal }) => (
          <React.Fragment>
            <button onClick={() => showModal(() => renderContent())}>Open Modal</button>
          </React.Fragment>
        )}
      </ModalConsumer>
    </ModalProvider>
  </React.Fragment>
```

```js
  import React from 'react';

  const TextModalContent = () => (
    <div>
      <h1>Text modal</h1>
      <p>Some next here !</p>
      <CloseButton />
    </div>
  );

  <button onClick={() => showModal(TextModalContent)}>Open Modal</button>
```
