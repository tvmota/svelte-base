// const { scss, sass, globalStyle, postcss } = require('svelte-preprocess');
const { scss, sass, globalStyle } = require('svelte-preprocess');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const path = require('path');
const fs = require('fs');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js'],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: [globalStyle(), sass(), scss(), require('autoprefixer')],
            dev: !prod,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    /*new LinkTypePlugin({
			'*.css' : 'text/css'
		})*/
  ],
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
    http2: true,
    host: 'localhost',
    https: {
      cert: fs.readFileSync(`./licensed+5.pem`),
      key: fs.readFileSync(`./licensed+5-key.pem`),
    },
  },
  devtool: prod ? false : 'source-map',
};
