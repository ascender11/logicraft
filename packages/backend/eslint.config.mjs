import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tsPlugin from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(
  js.configs.recommended,
  ...tsPlugin.configs.recommended,
  prettier,
  globalIgnores([
    'dist',
    'node_modules',
    'coverage',
    'src/generated',
    '**/*.config.{js,ts,mjs,cjs}',
  ]),
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      parser: tsPlugin.parser,
      parserOptions: {
        project: join(__dirname, 'tsconfig.json'),
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
    },
  },
);
