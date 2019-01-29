module.exports = {
  preset: 'jest-expo',
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '.*.tsx?$': 'ts-jest',
  },
  setupTestFrameworkScriptFile: './jest-configs/mocks/index.js',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testMatch: null,
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
}
