module.exports = {
  root: true,
  extends: '@react-native-community',

  overrides: [
    {
      files: ['*.{js,jsx}'],
      parser: 'babel-eslint',
    },
    {
      files: ['*.{ts,tsx}'],
      rules: {
        'react-native/no-inline-styles' : 'off',
      },
    },
  ],
};
