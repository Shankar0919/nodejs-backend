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
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/api-generator.ts",
    "!src/main.ts",
    "!src/app.module.ts",
    "!src/dtos/*",
    "!src/interfaces/*",
    "!**/node_modules/**",
    "!src/environments/*"
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
