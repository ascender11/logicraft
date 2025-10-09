export default {
  '*.{js,jsx,ts,tsx}': ['pnpm --filter frontend format:fix', 'pnpm --filter frontend lint:fix'],
  '*.json': ['pnpm --filter frontend format:fix'],
};
