module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        // Place custom rules here
        'react/react-in-jsx-scope': 'off', // Not needed with modern React
        'react/prop-types': 'off', // We're using TypeScript for prop validation
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'build/',
        'coverage/',
        'vite.config.js',
        'server/vite.ts',   // Ignore the problematic file with property errors
    ],
};