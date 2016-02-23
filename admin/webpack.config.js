
var PATHS = {
  build: __dirname + '/build',
  app: __dirname + '/src'
}

//process.env.BABEL_ENV = TARGET;

module.exports = {
  entry: './entry.jsx',
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};
//
// const common = {
//   entry: {
//     app: PATHS.app
//   },
//
//   // Add resolve.extensions.
//   // '' is needed to allow imports without an extension.
//   // Note the .'s before extensions as it will fail to match without!!!
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//
//   output: {
//     path: PATHS.build,
//     filename: 'bundle.js'
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.css$/,
//         loaders: ['style', 'css'],
//         include: PATHS.app
//       },
//       // Set up jsx. This accepts js too thanks to RegExp
//       {
//         test: /\.jsx?$/,
//         // Enable caching for improved performance during development
//         // It uses default OS directory by default. If you need something
//         // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
//         loaders: [
//           'babel?cacheDirectory="C:\",presets[]=react,presets[]=es2015'
//         ],
//         // Parse only app files! Without this it will go through entire project.
//         // In addition to being slow, that will most likely result in an error.
//         include: PATHS.app
//       }
//     ]
//   }
// };
