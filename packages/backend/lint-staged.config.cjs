module.exports = {
  '*.{js,ts}': [
    'pnpm --filter backend format:fix',
    'pnpm --filter backend lint:fix',
  ],
  '*.json': ['pnpm --filter backend format:fix'],
};
