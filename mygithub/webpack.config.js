const webpack = require("webpack");

module.exports = {
  node: {
    fs: "empty"
  },
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    filename: "app/js/main.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["babel-preset-es2015", "react"]
        }
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
};
