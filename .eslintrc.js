module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:react/jsx-runtime',
    // "google",
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
    'unicorn',
    // 'prettier',
    'simple-import-sort',
    'react-hooks',
  ],
  rules: {
    'no-console': 'warn',
    // indent: ["error", "tab"],
    'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    'simple-import-sort/imports': 1,
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', 'tsx'] }],
    // I suggest you add at least those two rules:
    // 'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'unicorn/prevent-abbreviations': 'off',
    // Airbnb prefers forEach
    'unicorn/no-array-for-each': 'off',
    // It's not accurate in the monorepo style
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
