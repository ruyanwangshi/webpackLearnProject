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
        test: /\.js$/,
        exclude: /node_modules/, // 该属性移除一些不必要的转化，以防导致多重转换会出现问题
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            // loader: "ts-loader",
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".ts"],
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  devServer: {},
};
