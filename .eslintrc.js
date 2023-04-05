module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/extensions': [
            'error',
            'always',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'test.{ts,tsx}', // Repos with a single test file
                    'test-*.{ts,tsx}', // Repos with multiple top-level test files
                    '**/*{.,_}{test,spec}.{ts,tsx}', // Tests where the extension or filename suffix denotes that it is a test
                    '**/jest.config.ts', // Jest config
                    '**/jest.setup.ts', // Jest setup
                ],
                optionalDependencies: false,
            },
        ],
    },
};
