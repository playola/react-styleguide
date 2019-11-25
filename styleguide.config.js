const path = require('path');

module.exports = {
  title: 'React Styleguide',
  components: 'src/components/**/index.{js,jsx}',
  ignore: [
    '**/*.spec.{js,jsx}',
    '**/components/index.js',
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
};
