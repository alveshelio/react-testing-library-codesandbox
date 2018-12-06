module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    // module must come first
    '\\.scss$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
    // can also map files that are loaded by webpack with the file-loader
  },
  // "moduleNameMapper": {
  //   ".+\\.(css|styl|less|sass|scss|svg)$": "<rootDir>/node_modules/jest-css-modules-transform",
  // },
  "transformIgnorePatterns" : [
    "^.d.ts?$"
  ],
}
