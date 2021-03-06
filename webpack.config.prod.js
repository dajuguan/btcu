"use strict";

const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
// const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
  entry: [path.join(__dirname, "client/index.js")],
  output: {
    publicPath: "/static/js",
    path: path.join(__dirname, "/server/static/js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader?cacheDirectory=true",
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader?removeTags=true"
      },
      {
        test: /\.scss$/,
        loader:
          "style-loader!css-loader!postcss-loader!sass-loader!import-glob-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!"
      },
      {
        test: /\.modernizrrc$/,
        loader: "modernizr"
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // new BabiliPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc")
    }
  }
};
