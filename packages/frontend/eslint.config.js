import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  globalIgnores(['dist', 'build', 'node_modules', 'coverage', '**/*.config.{js,ts,mjs,cjs}']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            { pattern: 'app/**', group: 'internal', position: 'before' },
            { pattern: 'processes/**', group: 'internal', position: 'before' },
            { pattern: 'pages/**', group: 'internal', position: 'before' },
            { pattern: 'widgets/**', group: 'internal', position: 'before' },
            { pattern: 'features/**', group: 'internal', position: 'before' },
            { pattern: 'entities/**', group: 'internal', position: 'before' },
            { pattern: 'shared/**', group: 'internal', position: 'before' },
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          warnOnUnassignedImports: true,
        },
      ],
    },
  },
]);
