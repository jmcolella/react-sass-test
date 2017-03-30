var webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './app/public/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/,  exclude: /node_modules/, loader: "eslint-loader" }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: [ 'react', 'es2015' ] } },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader', 'resolve-url-loader'] },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap' ] },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
