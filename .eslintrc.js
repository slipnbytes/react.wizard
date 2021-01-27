module.exports = {
  extends: '@hitechline/eslint-config-web',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',

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
  },
};
