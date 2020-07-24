const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const coveragePath = path.resolve(__dirname, 'coverage');

module.exports = {
  rootDir: srcPath,
  collectCoverage: true,
  coverageDirectory: coveragePath,
  collectCoverageFrom: [
    '**/!(*.test).(ts|tsx)'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ]
};
