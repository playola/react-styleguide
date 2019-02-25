# React Styleguide
> UI Components for React

## Getting started

```
git clone https://github.com/playola/react-styleguide.git

cd react-styleguide

npm install

npm run dev
```
See http://localhost:8080.

## Architecture

### Core libraries

* React
* Webpack
* Prop Types
* Styled Components
* React Styleguidist

## Components library

The components library is hosted in the Styleguidist server:
```
npm run styleguide
```
See http://localhost:6060.

We define a `.md` file for each component. If we need documentation for a styled component, we need to add a the `@component` decorator. See the example below:
```
import styled from 'styled-components';

/** @component */
export default const StyledDummyWrapper = styled.div`
    ...
`;
```

## References

* https://react-styleguidist.js.org/docs/thirdparties.html#styled-components
