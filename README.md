# React Styleguide
> UI Components for React

### [Live Demo](https://playola.github.io/react-styleguide)

## Getting started

The components library is hosted in a Styleguidist server:

```
    git clone https://github.com/playola/react-styleguide.git

    cd react-styleguide

    npm install

    npm run styleguide
```
See living demo of the components: http://localhost:6060.

## Architecture

### Core libraries

    * react
    * webpack
    * prop-types
    * styled-components
    * react-styleguidist

## How to add components

We define a `.md` file for each component. If we need documentation for a styled component, we need to add a the `@component` decorator. See the example below:

```
import styled from 'styled-components';

/** @component */
    export default const StyledDummyWrapper = styled.div`
        ...
    `;
```

## Publish to gh-pages

Settings are set to deploy from `master` branch using Travis CI automatically, so each merge into master will trigger a pipeline that will deploy our changes using `gh-pages`.

## References

* https://react-styleguidist.js.org/docs/thirdparties.html#styled-components
