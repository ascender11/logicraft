import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  globalIgnores(['dist', 'build', 'node_modules', 'coverage']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { import: importPlugin },
    languageOptions: { globals: globals.browser },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
          pathGroups: [
            { pattern: 'app/**', group: 'parent', position: 'before' },
            { pattern: 'processes/**', group: 'parent', position: 'before' },
            { pattern: 'pages/**', group: 'parent', position: 'before' },
            { pattern: 'widgets/**', group: 'parent', position: 'before' },
            { pattern: 'features/**', group: 'parent', position: 'before' },
            { pattern: 'entities/**', group: 'parent', position: 'before' },
            { pattern: 'shared/**', group: 'parent', position: 'before' },
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          warnOnUnassignedImports: true,
        },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
    },
  },
);
