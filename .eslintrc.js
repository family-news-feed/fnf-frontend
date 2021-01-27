module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  ignorePatterns: ['public', 'build'],
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'flowtype',
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'react-hooks',
    'sonarjs',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolvers': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          },
        },
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/babel',
        'prettier/react',
        'plugin:@typescript-eslint/recommended',
        'plugin:flowtype/recommended',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:sonarjs/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
        'flowtype',
        'import',
        'jest',
        'jsx-a11y',
        'react',
        'react-hooks',
        'sonarjs',
      ],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
