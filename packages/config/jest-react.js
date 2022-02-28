module.exports = {
    ...require('./jest'),
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    collectCoverageFrom: ['**/src/**/*.{js,ts,jsx,tsx}'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'ts-jest',
    },
    coveragePathIgnorePatterns: ['.index'],
    coverageThreshold: null,
}