const path = require('path');
const glob = require('glob');

module.exports = [{
  entry: ['./app.scss', './app.js'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          { loader: 'sass-loader',
            options: {
              sourceMap: true,

              // mdc-web doesn't use sass-loader's normal syntax for imports
              // across modules, so we add all module directories containing
              // mdc-web components to the Sass include path
              // https://github.com/material-components/material-components-web/issues/351
              includePaths: glob.sync(
                path.join(__dirname, '**/node_modules/@material')
              ).map((dir) => path.dirname(dir)),
            },
          },
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      }
    ]
  },
}];