module.exports = {
  setupFilesAfterEnv: ['./src/setupTest.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/containers(.*)$': '<rootDir>/src/containers$1',
    '^@/theme(.*)$': '<rootDir>/src/theme$1',
  },
};
