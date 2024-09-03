module.exports = {
    root: true,
    env: {
        'browser': true,
        'jest/globals': true,
        'node': true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
        'jest'
    ],
    // add your custom rules here
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'indent': ['error', 4],
        'import/order': ['error', { groups: [['external', 'internal']] }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-tabs': 'off',
        'quote-props': ['error', 'consistent'],
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }]
    }
};
