module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb',
        "eslint:recommended",
        'airbnb-typescript',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'import'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['apps/*/tsconfig.json'],
            },
        },
    },
    rules: {
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
            },
        ],
        "jsx-a11y/label-has-associated-control": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
    },
    ignorePatterns: [
        '**/*.js',
        '**/*.json',
        'node_modules',
        'public',
        'styles',
        'coverage',
        'dist',
        '.turbo',
    ],
    overrides: [
        {
            env: {
                jest: true,
            },
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
            rules: {
                'import/no-extraneous-dependencies': [
                    'off',
                    { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
                ],
            },
        },
    ],
}