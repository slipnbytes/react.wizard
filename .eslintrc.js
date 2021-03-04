module.exports = {
  extends: '@hitechline/eslint-config-web',
  rules: {
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',

    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          ['module', '/^@hitechline/'],
          '/^@/',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        ignoreTypeReferences: true,
      },
    ],
  },
};
