import './../src/components/assets/css/fontawesome.min.css';
import './../src/components/assets/css/brands.min.css';
import './../src/components/assets/css/solid.min.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}