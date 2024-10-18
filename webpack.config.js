const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/assets/images/favicon.ico",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8080,
    open: true,
    liveReload: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
  devtool: "source-map",
};
