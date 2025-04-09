export default {
    preset: 'ts-jest/presets/js-with-ts-esm',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/client/src/$1',
        '^@assets/(.*)$': '<rootDir>/assets/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            useESM: true,
            tsconfig: 'tsconfig.json',
        }],
    },
    collectCoverageFrom: [
        'client/src/**/*.{ts,tsx}',
        '!client/src/**/*.d.ts',
    ],
};