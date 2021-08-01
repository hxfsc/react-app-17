const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const webpack = require("webpack")

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",

  plugins: [
   // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        environment: JSON.stringify("dev")
      }
    })
  ],

  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
})
