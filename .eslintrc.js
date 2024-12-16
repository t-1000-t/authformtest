module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/forbid-prop-types': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.stories.js'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
