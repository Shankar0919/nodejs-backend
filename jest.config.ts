/* eslint-disable */
export default {
  displayName: 'nodejs-backend',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/main.ts",
    "!src/app.module.ts",
    "!src/api-generator.ts",
    "!**/node_modules/**"
  ],
  coverageReporters: ['text', 'lcov', 'json'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
