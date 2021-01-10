module.exports = {
  extends: '@hitechline/eslint-config-web',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },

  // rules: {
  //   'import-helpers/order-imports': [
  //     'warn',
  //     {
  //       newlinesBetween: 'always',
  //       alphabetize: { order: 'asc', ignoreCase: true },
  //       groups: [
  //         'module',
  //         '/^@/',
  //         ['parent', 'sibling', 'index'],
  //       ],
  //     },
  //   ],
  // },
};
