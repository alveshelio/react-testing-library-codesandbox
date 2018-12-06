module.exports = () => ({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]--[local]__[hash:base64:5]',
              minimize: true
            }
          },
          { loader: 'postcss-loader'},
          { loader: 'sass-loader'}        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[name]--[local]__[hash:base64:5]",
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(a?png|svg)$/,
        use: 'url-loader?limit=10000'
      },
    ],
  },
  optimization: {
    namedModules: true,
  },
});
