const path = require('path');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        exclude: [/node_modules/, path.resolve(__dirname, 'src/config/')],
        loaders : 'awesome-typescript-loader'
      },
    ],
  },
});
