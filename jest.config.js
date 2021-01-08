const esModules = ['validator'].join('|');

module.exports = {
    "roots": [
        "<rootDir>/tests"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "transformIgnorePatterns": [`/node_modules/(?!${esModules})`],
}