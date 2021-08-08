const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    filename: "js/index.js",
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts?x$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      //   {
      //     use: /\.css$/,
      //     exclude: /node_modules/,
      //     test: [
      //       "style-loader",
      //       {
      //         loader: "css-loader",
      //         options: {
      //           importLoaders: 1,
      //         },
      //       },
      //       "postcss-loader",
      //     ],
      //   },
      //   {
      //     use: /\.less$/,
      //     exclude: /node_modules/,
      //     test: [
      //       "style-loader",
      //       {
      //         loader: "css-loader",
      //         options: {
      //           importLoaders: 2,
      //         },
      //       },
      //       "postcss-loader",
      //       "less-loader",
      //     ],
      //   },
      //   {
      //     use: /\.js$/,
      //     exclude: /node_modules/,
      //     test: ["babel-loader"],
      //   },
      //   {
      //     use: /\.ts?x$/,
      //     exclude: /node_modules/,
      //     test: ["babel-loader"],
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
