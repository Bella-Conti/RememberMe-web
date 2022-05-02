module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverage: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};
