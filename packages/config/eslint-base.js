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
        "no-console": "off",
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
            files: ["**/*.tsx"],
            rules: {
                "react/react-in-jsx-scope": "off",
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
            }
        },
        {
            files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
            env: {
                jest: true,
            },
            extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
        },
    ],
};
