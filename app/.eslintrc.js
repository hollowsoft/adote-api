module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '*/tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  root: true,
  env: {
    jest: true,
    node: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off'
  }
}
