module.exports = {
    verbose: false,
    testEnvironment: 'node',
    testPathIgnorePatterns: [
      'node_modules',
      '__tests__/__fixtures__/',
      'snippetExamples/',
    ],
    setupFilesAfterEnv: ['./jest.setup.js'],
};
