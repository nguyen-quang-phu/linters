import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import xoSpaceBrowser from 'eslint-config-xo/space/browser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import oxlint from 'eslint-plugin-oxlint';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPerfPlugin from 'eslint-plugin-react-perf';
import preferFunctionComponent from 'eslint-plugin-react-prefer-function-component/config';
import pluginSecurity from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import cssModules from 'eslint-plugin-css-modules';

import customRules from './eslint-rules/index.js';

export default defineConfig([
  {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax support
        },
      },
    },
    plugins: { js },
  },
  importPlugin.flatConfigs.recommended,
  xoSpaceBrowser,
  pluginReact.configs.flat.recommended,
  eslintReact.configs['disable-conflict-eslint-plugin-react'],
  eslintReact.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  jsxA11y.flatConfigs.strict,
  reactPerfPlugin.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  sonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  {
    plugins: {
      'css-modules': cssModules,
    },
    rules: {
      'css-modules/no-unused-class': 'error',
      'css-modules/no-undef-class': 'error',
    },
  },
  // PreferFunctionComponent.configs.recommended,
  // perfectionist.configs['recommended-alphabetical'],
  oxlint.configs['flat/recommended'],
  {
    settings: {
      'import/resolver': {
        alias: [
          ['apis', './src/apis'],
          ['assets', './src/assets'],
          ['components', './src/components'],
          ['wrappers', './src/wrappers'],
          ['constants', './src/constants'],
          ['hooks', './src/hooks'],
          ['scss', './src/scss'],
          ['services', './src/services'],
          ['utils', './src/utils'],
          ['features', './src/features'],
          ['slices', './src/slices'],
          ['frameworks', './src/frameworks'],
          ['HOC', './src/HOC'],
          ['tokens', './src/tokens'],
          ['helpers', './src/helpers'],
          ['libs', './src/libs'],
          ['i18n', './src/i18n'],
          ['store', './src/store'],
          ['slices-machine', './src/slices-machine'],
          ['context', './src/context'],
          ['@lumin-tokens/static', './node_modules/@lumin-ui/dist/design-tokens/growth-templates/js'],
          ['@lumin-tokens/kiwi', './node_modules/@lumin-ui/dist/design-tokens/kiwi/js'],
          ['@lumin-tokens/kiwi/*', './node_modules/@lumin-ui/dist/design-tokens/kiwi/js/*'],
          ['@lumin-tokens', './node_modules/@lumin-ui/dist/design-tokens/koala/js'],
          ['@lumin-tokens/*', './node_modules/@lumin-ui/dist/design-tokens/koala/js/*'],
          ['@lumin-ui/kiwi', './node_modules/@lumin-ui/dist/kiwi-ui'],
        ],
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      custom: customRules,
    },
    rules: {
      'custom/no-nested-translation-keys': ['error', { maxDepth: 1 }],
    },
  },
  {
    rules: {
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/function-paren-newline': ['error', 'consistent'],
      '@stylistic/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      'no-console': 'error',
      'no-debugger': 'error',
      'perfectionist/sort-imports': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
            kebabCase: true,
          },
        },
      ],
      'unicorn/prefer-node-protocol': 'off',
    },
  },
]);
