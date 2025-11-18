// Arquivo convertido para CommonJS: jest.config.cjs
const { defaultsESM } = require('ts-jest/presets');

module.exports = {
  testEnvironment: 'node',
  transform: {
    ...defaultsESM.transform,
  },
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^(.+?)\.js$': '$1',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};