```javascript
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    env: {
      node: true,
      es2021: true,
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
];
```
