"use strict";

const _ = require("lodash");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const errorHandler = require("./middlewares/").errorHandler;

const app = express();

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../webpack.config.dev");

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(function(req, res, next) {
  console.log(req.path);
  next();
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(
  "/.well-known",
  express.static(path.join(__dirname, "static/.well-known"))
);

app.use(routes);
app.use(errorHandler);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

module.exports = app;
