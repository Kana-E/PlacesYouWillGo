/**
 * These rules enforce Hack Reactor's style guide.
 * Visit this repo for more information:
 *   https://github.com/hackreactor-labs/eslint-config-hackreactor
 */

module.exports = {
  env: {
    'es6': true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    /* Indentation */
    'no-mixed-spaces-and-tabs': 2,
    'indent': [2, 2],
    /* Variable names */
    'camelcase': 2,
    /* Language constructs */
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [1, 'expression'],
    /* Semicolons */
    'semi': 2,
    'no-extra-semi': 2,
    /* Padding & additional whitespace (perferred but optional) */
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    /* Variable declaration */
    'one-var': [1, { 'uninitialized': 'never', 'initialized': 'never' }],
    'no-use-before-define': [2, { 'functions': false }],
    /* Minuta */
    'comma-style': [2, 'last'],
    'quotes': [1, 'single']
  }
};