const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const path = require('path')
const lodash = require('lodash')
const glob = require('glob')
const fs = require('fs')
const WebpackPreBuildPlugin = require('pre-build-webpack')
const loadPresets = require('./build-utils/loadPresets')
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin')
let combinedJsonOutput
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)

function srcPath(subdir) {
	return path.join(__dirname, './src', subdir);
}

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => webpackMerge(
  {
    entry: './src/index.tsx',
    mode,
    output: {
      filename: 'bundle.js',
      publicPath: '/',
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json','.svg'],
      modules: ['node_modules', path.resolve(__dirname, 'src/')],
      mainFields: ['module', 'browser', 'main'],
      alias: {
        containers: srcPath('containers'),
        types: srcPath('types'),
        pages: srcPath('pages'),
        templates: srcPath('templates'),
        models: srcPath('models'),
        services: srcPath('services'),
        assets: srcPath('assets'),
        api: srcPath('api'),
        constants: srcPath('constants'),
      },
    },
    module: {
      rules: [
        {
          test: /\.jpe?g/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000,
              }
            }
          ],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Préposé au contenu',
      template: './public/index.html',
      filename: './index.html',
      files: {
				js: '/public/config.js',
			}
    }),
    new webpack.ProgressPlugin(),
    ]
  },
  modeConfig(mode),
  loadPresets({ mode, presets }),
);
