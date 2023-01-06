const HtmlWebPackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");
const { webAppConfig } = require("./webAppConfig");
const Dotenv = require('dotenv-webpack');


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  publicPath: "/",
});
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    htmlPlugin,
    new NodePolyfillPlugin(),
    new EnvironmentPlugin(webAppConfig),
    new Dotenv(),
  ],
  resolve: {
    fallback: {
      fs: false,
    },
  },
};

