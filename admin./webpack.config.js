var PATHS = {
  build: __dirname + '/build',
  app: __dirname + '/src'
}

var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: __dirname + '/entry.jsx',
    html: __dirname + '/src/index.html',
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot","babel-loader?cacheDirectory,presets[]=react,presets[]=es2015"],
      }
    ]
  },
};
