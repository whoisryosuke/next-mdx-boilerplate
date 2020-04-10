module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",

    // Next imports React into pages automatically
    'react/react-in-jsx-scope': 'off',
    // Next includes packages like MDX using their bundle
    'import/no-extraneous-dependencies': 'off',
    
    // Not necessary with Typescript
    'react/prop-types': 'off',

    // Causes issues with arrow functions and MDX provider components
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
