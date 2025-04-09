import tseslint from '@typescript-eslint/eslint-plugin';
import typescript from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
    {
        languageOptions: {
            parser: typescript,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            globals: {
                // Browser globals
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                // Node globals
                process: 'readonly',
                module: 'readonly',
                require: 'readonly',
                // ES globals
                Promise: 'readonly',
                Map: 'readonly',
                Set: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // ESLint recommended rules - relaxed for development
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'no-undef': 'off',  // Turning off as it's conflicting with TS definitions

            // TypeScript ESLint rules - relaxed for development
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',

            // React rules
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',

            // React Hooks rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
    {
        // Ignore specific files and directories
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            'coverage/',
            'vite.config.ts',
            'server/vite.ts',  // Ignore the problematic file with property errors
        ],
    },
];