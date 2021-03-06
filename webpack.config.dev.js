"use strict";

const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = {
  devtool: "eval-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, "client/index.js")
  ],
  output: {
    publicPath: "/static/js",
    path: path.join(__dirname, "/server/static/js"),
    filename: "bundle.js",
    globalObject: "this"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader?cacheDirectory=true",
        exclude: /node_modules/,
        options: {
          plugins: [
            [
              "import",
              {
                libraryName: "antd",
                libraryDirectory: "es",
                style: "css"
              }
            ]
          ]
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader!",
      //   options: {
      //     plugins: [
      //       [
      //         "import",
      //         {
      //           libraryName: "antd",
      //           libraryDirectory: "es",
      //           style: "css" // `style: true` 会加载 less 文件
      //         }
      //       ]
      //     ]
      //   }
      // },
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc")
    }
  }
};
