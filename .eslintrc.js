module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  /* Place all typescript related config here so we can lint javascript files
   * (like this one!).
   */
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      env: {
        browser: true,
        node: true,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react-hooks'],
      extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts'],
          },
          typescript: {},
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', 'd.ts'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', 'd.ts'],
        },
        react: {
          version: 'detect',
        },
      },
      // Rules that apply only to typescript files should go here
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        // Disabled because as of React 17 this is not necessary
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        // Disabled because we use TypeScript, so we don't care about PropTypes
        'react/prop-types': 'off',
        'no-warning-comments': 'warn',
        // Extend the rule already enabled by airbnb with "props: true"
        'no-param-reassign': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  // Only rules that apply to both javascript and typescript files should go
  // here. Typescript rules should go in the overrides section.
  rules: {
    'prettier/prettier': 'warn',
  },
};