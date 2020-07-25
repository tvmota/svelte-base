module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**!/__tests__/!*.{j,t}s?(x)', '**!/tests/unit/!**!/!*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'space-infix-ops': ['error', { int32Hint: false }], //space around = , +, -, etc
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], //space after :
    'keyword-spacing': ['error', { before: true }],
    'space-before-blocks': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'error',
  },
};
