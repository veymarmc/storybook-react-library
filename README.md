Ready-to-use practical and useful react components powered by:
- [Storybook](https://storybook.js.org/)
- [Create react app](https://create-react-app.dev/)
- [Sass](https://sass-lang.com/).

## Installation

```
npm i -S @vmc-react-js/storybook-react-library
```

## Usage

Include the packages styles in your js entrypoint (like index.js):

```js
import '@vmc-react-js/storybook-react-library/dist/main.css';
```

And use the package in your component:

```js
import { Button } from '@vmc-react-js/storybook-react-library';

const MyComponent = () => {
  <Button label='Button' />
}
```

## Features

This packages comes with the following features:
- Although this package is implemented with js, it provides a types definition out of the box in order to provide vscode intellisense.
- This package works with the free version of font-awesome 6 (webfonts/styles) out of the box ready to use when installed.
- This is developed with storybook so the current repository is a functional storybook project for continuing incrementing the library components.
- This project uses github-actions for continuing deploying.
